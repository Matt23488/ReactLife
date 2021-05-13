import { Life, LifePoint, LifeRect } from './api';

class ByteBlock {
    private readonly _width: number;
    private readonly _height: number;
    private readonly _bytes: Uint8Array;

    public constructor(width: number, height: number, bytes?: Uint8Array) {
        this._width = width;
        this._height = height;
        this._bytes = bytes || new Uint8Array(width * height);
    }

    private isValid(x: number, y: number) { return 0 <= x && x < this._width && 0 <= y && y < this._height; }

    public get(x: number, y: number) {
        if (!this.isValid(x, y)) throw new Error('ByteBlock get(): Out of range');
        return this._bytes[y * this._width + x];
    }

    public set(x: number, y: number, value: number) {
        if (!this.isValid(x, y)) throw new Error('ByteBlock set(): Out of range');
        this._bytes[y * this._width + x] = value;
    }

    public moveLeft() {
        const newBytes = new Uint8Array(this._bytes.length);
        for (let i = 1; i < newBytes.length; i++) newBytes[i - 1] = this._bytes[i];
        for (let i = this._width - 1; i < newBytes.length; i += this._width) newBytes[i] = 0x00;
        return new ByteBlock(this._width, this._height, newBytes);
    }

    public moveRight() {
        const newBytes = new Uint8Array(this._bytes.length);
        for (let i = 1; i < newBytes.length; i++) newBytes[i] = this._bytes[i - 1];
        for (let i = this._width; i < newBytes.length; i += this._width) newBytes[i] = 0x00;
        return new ByteBlock(this._width, this._height, newBytes);
    }

    public moveUp() {
        const newBytes = new Uint8Array(this._bytes.length);
        for (let i = 0; i < newBytes.length - this._width; i++) newBytes[i] = this._bytes[i + this._width];
        return new ByteBlock(this._width, this._height, newBytes);
    }

    public moveDown() {
        const newBytes = new Uint8Array(this._bytes.length);
        for (let i = 0; i < newBytes.length - this._width; i++) newBytes[i + this._width] = this._bytes[i];
        return new ByteBlock(this._width, this._height, newBytes);
    }

    public where(b: number) {
        const newBytes = new Uint8Array(this._bytes.length);
        for (let i = 0; i < newBytes.length; i++) newBytes[i] = this._bytes[i] === b ? 0x01 : 0x00;
        return new ByteBlock(this._width, this._height, newBytes);
    }

    public sum(...bs: ByteBlock[]) {
        if (bs.some(b => b._width !== this._width || b._height !== this._height)) throw new Error('ByteBlock sum(): Incompatible ByteBlocks');

        const newBytes = this._bytes.map(b => b);
        for (let b of bs) {
            for (let i = 0; i < newBytes.length; i++) newBytes[i] += b._bytes[i];
        }

        return new ByteBlock(this._width, this._height, newBytes);
    }

    public static or(a: ByteBlock, b: ByteBlock) {
        if (a._width !== b._width || a._height !== b._height) throw new Error('ByteBlock or(): Incompatible ByteBlocks');

        const newBytes = new Uint8Array(a._bytes.length);
        for (let i = 0; i < newBytes.length; i++) newBytes[i] = a._bytes[i] | b._bytes[i];
        return new ByteBlock(a._width, a._height, newBytes);
    }

    public static and(a: ByteBlock, b: ByteBlock) {
        if (a._width !== b._width || a._height !== b._height) throw new Error('ByteBlock and(): Incompatible ByteBlocks');

        const newBytes = new Uint8Array(a._bytes.length);
        for (let i = 0; i < newBytes.length; i++) newBytes[i] = a._bytes[i] & b._bytes[i];
        return new ByteBlock(a._width, a._height, newBytes);
    }
}

export default class ScholesLife implements Life {
    private readonly _width = 256;
    private readonly _height = 256;
    private _cells: ByteBlock = new ByteBlock(this._width, this._height);

    public get width() { return this._width; }
    public get height() { return this._height; }

    public clear() {
        this._cells = new ByteBlock(this._width, this._height);
    }

    private isValidPoint(x: number, y: number) { return 0 < x && x < this._width - 1 && 0 < y && y < this._height - 1; }

    public get(x: number, y: number) {
        if (!this.isValidPoint(x, y)) return false;
        return this._cells.get(x, y) === 0x01;
    }

    public set(x: number, y: number, value: boolean) {
        if (!this.isValidPoint(x, y)) return;
        this._cells.set(x, y, value ? 0x01 : 0x00);
    }

    public step() {
        const w = this._cells.moveLeft();
        const e = this._cells.moveRight();
        const n = this._cells.moveUp();
        const s = this._cells.moveDown();
        const nw = w.moveUp();
        const ne = e.moveUp();
        const sw = w.moveDown();
        const se = e.moveDown();
        const sum = this._cells.sum(w, e, n, s, nw, ne, sw, se);

        const threes = sum.where(3);
        const fours = sum.where(4);
        const livingFours = ByteBlock.and(fours, this._cells);
        this._cells = ByteBlock.or(threes, livingFours);
    }

    public draw(rect: LifeRect, setPixel: (v: LifePoint) => void) {
        const xmin = Math.max(0, rect.x);
        const xmax = Math.min(this._width, rect.x + rect.width);
        const ymin = Math.max(0, rect.y - rect.height + 1);
        const ymax = Math.min(this._height, rect.y + 1);
        for (let y = ymin; y < ymax; y++) for (let x = xmin; x < xmax; x++) if(this._cells.get(x, y) === 0x01) setPixel({ x, y });
    }
}
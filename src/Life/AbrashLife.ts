import { Life, LifePoint, LifeRect } from './api';

class Cell {
    private readonly _cell: number;
    public constructor(cell: number) {
        this._cell = cell;
    }

    private static readonly _state = 4;
    private static readonly _statem = 1 << Cell._state;
    private static readonly _countm = 0x0f;

    public get state() { return (this._cell & Cell._statem) !== 0; }
    public get count() { return this._cell & Cell._countm; }

    public get allDead() { return this._cell === 0; }

    public makeAlive() { return new Cell(this._cell | Cell._statem); }
    public makeDead() { return new Cell(this._cell & ~Cell._statem); }

    public increment() {
        return new Cell(this._cell + 1);
    }

    public decrement() {
        return new Cell(this._cell - 1);
    }

    public clone() { return new Cell(this._cell); }
}

export default class AbrashLife implements Life {
    private readonly _width = 258;
    private readonly _height = 258;
    private _cells: Cell[][] = [];

    public constructor() { this.clear(); }

    public clear() { this._cells = Array<Cell[]>(this._width).fill(Array<Cell>(this._height).fill(new Cell(0))); }
    private isValidPoint(x: number, y: number) { return 0 < x && x < this._width - 1 && 0 < y && y < this._height - 1; }

    private becomeAlive(x: number, y: number) {
        this._cells[x - 1][y - 1] = this._cells[x - 1][y - 1].increment();
        this._cells[x - 1][y + 0] = this._cells[x - 1][y + 0].increment();
        this._cells[x - 1][y + 1] = this._cells[x - 1][y + 1].increment();
        this._cells[x + 0][y - 1] = this._cells[x + 0][y - 1].increment();
        this._cells[x + 0][y + 0] = this._cells[x + 0][y + 0].makeAlive();
        this._cells[x + 0][y + 1] = this._cells[x + 0][y + 1].increment();
        this._cells[x + 1][y - 1] = this._cells[x + 1][y - 1].increment();
        this._cells[x + 1][y + 0] = this._cells[x + 1][y + 0].increment();
        this._cells[x + 1][y + 1] = this._cells[x + 1][y + 1].increment();
    }

    private becomeDead(x: number, y: number) {
        this._cells[x - 1][y - 1] = this._cells[x - 1][y - 1].decrement();
        this._cells[x - 1][y + 0] = this._cells[x - 1][y + 0].decrement();
        this._cells[x - 1][y + 1] = this._cells[x - 1][y + 1].decrement();
        this._cells[x + 0][y - 1] = this._cells[x + 0][y - 1].decrement();
        this._cells[x + 0][y + 0] = this._cells[x + 0][y + 0].makeDead();
        this._cells[x + 0][y + 1] = this._cells[x + 0][y + 1].decrement();
        this._cells[x + 1][y - 1] = this._cells[x + 1][y - 1].decrement();
        this._cells[x + 1][y + 0] = this._cells[x + 1][y + 0].decrement();
        this._cells[x + 1][y + 1] = this._cells[x + 1][y + 1].decrement();
    }

    public get(x: number, y: number) {
        if (this.isValidPoint(x, y)) return this._cells[x][y].state;
        else return false;
    }

    public set(x: number, y: number, value: boolean) {
        if (!this.isValidPoint(x, y)) return;
        const c = this._cells[x][y];

        if (c.state === value) return;
        if (value) this.becomeAlive(x, y);
        else this.becomeDead(x, y);
    }

    public step() {
        const clone = Array<Cell[]>(this._width).fill(Array<Cell>(this._height));
        for (let y = 0; y < this._height; y++) for (let x = 0; x < this._width; x++) clone[x][y] = this._cells[x][y].clone();
        for (let y = 1; y < this._height - 1; y++) {
            for (let x = 1; x < this._width - 1; x++) {
                const cell = clone[x][y];
                if (cell.allDead) continue;

                const count = cell.count;
                if (cell.state) {
                    if (count !== 2 && count !== 3) this.becomeDead(x, y);
                } else if (count === 3) this.becomeAlive(x, y);
            }
        }
    }

    public draw(rect: LifeRect, setPixel: (v: LifePoint) => void) {
        const xmin = Math.max(1, rect.x);
        const xmax = Math.min(this._width - 1, rect.x + rect.width);
        const ymin = Math.max(1, rect.y - rect.height + 1);
        const ymax = Math.min(this._height - 1, rect.y + 1);
        for (let y = ymin; y < ymax; y++) for (let x = xmin; x < xmax; x++) if (this._cells[x][y].state) setPixel({ x, y });
    }
}
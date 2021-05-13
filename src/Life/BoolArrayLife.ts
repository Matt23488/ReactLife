import { Life, LifePoint, LifeRect } from './api';

export default class BoolArrayLife implements Life {
    private _width = 256;
    private _height = 256;
    private _cells: boolean[][] = [];

    public constructor() {
        this.clear();
    }

    public get width() { return this._width; }
    public get height() { return this._height; }

    public clear() {
        this._cells = this.makeCellsArray();
    }

    private makeCellsArray() {
        const cells: boolean[][] = [];
        for (let x = 0; x < this._width; x++) {
            cells[x] = [];
            for (let y = 0; y < this._height; y++) cells[x][y] = false;
        }
        return cells;
    }

    private isValidPoint(x: number, y: number) {
        return 0 <= x && x < this._width && 0 <= y && y < this._height;
    }

    public get(x: number, y: number) {
        if (this.isValidPoint(x, y)) return this._cells[x][y];
        return false;
    }

    public set(x: number, y: number, alive: boolean) {
        if (this.isValidPoint(x, y)) this._cells[x][y] = alive;
    }

    private livingNeighbors(x: number, y: number) {
        if (1 <= x && x < this._width - 1 && 1 <= y && y < this._height - 1) {
            let sum = this._cells[x - 1][y - 1] ? 1 : 0;
            sum += this._cells[x - 1][y] ? 1 : 0;
            sum += this._cells[x - 1][y + 1] ? 1 : 0;
            sum += this._cells[x][y - 1] ? 1 : 0;
            sum += this._cells[x][y + 1] ? 1 : 0;
            sum += this._cells[x + 1][y - 1] ? 1 : 0;
            sum += this._cells[x + 1][y] ? 1 : 0;
            sum += this._cells[x + 1][y + 1] ? 1 : 0;
            return sum;
        } else {
            let sum = this.get(x - 1, y - 1) ? 1 : 0;
            sum += this.get(x - 1, y) ? 1 : 0;
            sum += this.get(x - 1, y + 1) ? 1 : 0;
            sum += this.get(x, y - 1) ? 1 : 0;
            sum += this.get(x, y + 1) ? 1 : 0;
            sum += this.get(x + 1, y - 1) ? 1 : 0;
            sum += this.get(x + 1, y) ? 1 : 0;
            sum += this.get(x + 1, y + 1) ? 1 : 0;
            return sum;
        }
    }

    public step() {
        const newCells = this.makeCellsArray();
        for (let y = 0; y < this._height; y++) {
            for (let x = 0; x < this._width; x++) {
                const count = this.livingNeighbors(x, y);
                newCells[x][y] = count === 3 || (this._cells[x][y] && count === 2);
            }
        }
        this._cells = newCells;
    }

    public draw(rect: LifeRect, setPixel: (v: LifePoint) => void) {
        let xmin = Math.max(0, rect.x);
        let xmax = Math.min(this._width, rect.x + rect.width);
        let ymin = Math.max(0, rect.y - rect.height + 1);
        let ymax = Math.min(this._height, rect.y + 1);
        for (let y = ymin; y < ymax; y++) for (let x = xmin; x < xmax; x++) if (this._cells[x][y]) setPixel({ x, y });
    }
}
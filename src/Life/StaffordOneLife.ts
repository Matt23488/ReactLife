import { Life, LifePoint, LifeRect } from './api';

class Triplet {
    private _triplet: number;
    public constructor(triplet: number) {
        this._triplet = triplet;
    }

    // Bit numbers
    private static readonly _lnext = 14;
    private static readonly _mnext = 13;
    private static readonly _rnext = 12;
    private static readonly _lcur = 11;
    private static readonly _mcur = 10;
    private static readonly _rcur = 9;
    private static readonly _lcount = 6;
    private static readonly _mcount = 3;
    private static readonly _rcount = 0;

    // Bit masks
    private static readonly _lnm = 1 << Triplet._lnext;
    private static readonly _mnm = 1 << Triplet._mnext;
    private static readonly _rnm = 1 << Triplet._rnext;
    private static readonly _lcm = 1 << Triplet._lcur;
    private static readonly _mcm = 1 << Triplet._mcur;
    private static readonly _rcm = 1 << Triplet._rcur;
    private static readonly _lcountm = 7 << Triplet._lcount;
    private static readonly _mcountm = 7 << Triplet._mcount;
    private static readonly _rcountm = 7 << Triplet._rcount;

    // Getters and setters
    public get leftNext() { return (Triplet._lnm & this._triplet) !== 0; }
    public get middleNext() { return (Triplet._mnm & this._triplet) !== 0; }
    public get rightNext() { return (Triplet._rnm & this._triplet) !== 0; }

    public get leftNextRaw() { return (this._triplet & Triplet._lnm) >> Triplet._lnext; }
    public get middleNextRaw() { return (this._triplet & Triplet._mnm) >> Triplet._mnext; }
    public get rightNextRaw() { return (this._triplet & Triplet._rnm) >> Triplet._rnext; }

    public setLeftNext(b: boolean) { return new Triplet(b ? (Triplet._lnm | this._triplet) : (~Triplet._lnm & this._triplet)); }
    public setMiddleNext(b: boolean) { return new Triplet(b ? (Triplet._mnm | this._triplet) : (~Triplet._mnm & this._triplet)); }
    public setRightNext(b: boolean) { return new Triplet(b ? (Triplet._rnm | this._triplet) : (~Triplet._rnm & this._triplet)); }

    public get leftCurrent() { return (Triplet._lcm & this._triplet) !== 0; }
    public get middleCurrent() { return (Triplet._mcm & this._triplet) !== 0; }
    public get rightCurrent() { return (Triplet._rcm & this._triplet) !== 0; }

    public get leftCurrentRaw() { return (this._triplet & Triplet._lcm) >> Triplet._lcur; }
    public get middleCurrentRaw() { return (this._triplet & Triplet._mcm) >> Triplet._mcur; }
    public get rightCurrentRaw() { return (this._triplet & Triplet._rcm) >> Triplet._rcur; }

    public setLeftCurrent(b: boolean) { return new Triplet(b ? (Triplet._lcm | this._triplet) : (~Triplet._lcm & this._triplet)); }
    public setMiddleCurrent(b: boolean) { return new Triplet(b ? (Triplet._mcm | this._triplet) : (~Triplet._mcm & this._triplet)); }
    public setRightCurrent(b: boolean) { return new Triplet(b ? (Triplet._rcm | this._triplet) : (~Triplet._rcm & this._triplet)); }

    public get leftCountRaw() { return (Triplet._lcountm & this._triplet) >> Triplet._lcount; }
    public get middleCountRaw() { return (Triplet._mcountm & this._triplet) >> Triplet._mcount; }
    public get rightCountRaw() { return (Triplet._rcountm & this._triplet) >> Triplet._rcount; }

    public get leftCount() { return this.middleCurrentRaw+ this.leftCountRaw; }
    public get middleCount() { return this.middleCountRaw + this.leftCurrentRaw + this.rightCurrentRaw; }
    public get rightCount() { return this.middleCurrentRaw + this.rightCountRaw; }

    public setLeftCountRaw(c: number) { return new Triplet((c << Triplet._lcount) | (~Triplet._lcountm & this._triplet)); }
    public setMiddleCountRaw(c: number) { return new Triplet((c << Triplet._mcount) | (~Triplet._mcountm & this._triplet)); }
    public setRightCountRaw(c: number) { return new Triplet((c << Triplet._rcount) | (~Triplet._rcountm & this._triplet)); }

    private static readonly _lcountone = 1 << Triplet._lcount;
    private static readonly _mcountone = 1 << Triplet._mcount;
    private static readonly _rcountone = 1 << Triplet._rcount;
    public get uup() { return new Triplet(Triplet._rcountone + this._triplet); }
    public get uum() { return new Triplet(-Triplet._rcountone + this._triplet); }
    public get upu() { return new Triplet(Triplet._mcountone + this._triplet); }
    public get upp() { return new Triplet(Triplet._mcountone + Triplet._rcountone + this._triplet); }
    public get umu() { return new Triplet(-Triplet._mcountone + this._triplet); }
    public get umm() { return new Triplet(-Triplet._mcountone - Triplet._rcountone + this._triplet); }
    public get puu() { return new Triplet(Triplet._lcountone + this._triplet); }
    public get pum() { return new Triplet(Triplet._lcountone - Triplet._rcountone + this._triplet); }
    public get ppu() { return new Triplet(Triplet._lcountone + Triplet._mcountone + this._triplet); }
    public get ppp() { return new Triplet(Triplet._lcountone + Triplet._mcountone + Triplet._rcountone + this._triplet); }
    public get muu() { return new Triplet(-Triplet._lcountone + this._triplet); }
    public get mup() { return new Triplet(-Triplet._lcountone + Triplet._rcountone + this._triplet); }
    public get mmu() { return new Triplet(-Triplet._lcountone - Triplet._mcountone + this._triplet); }
    public get mmm() { return new Triplet(-Triplet._lcountone - Triplet._mcountone - Triplet._rcountone + this._triplet); }
    public get lookupKey1() { return this._triplet & 0x0fff };

    private static readonly _currentm = Triplet._lcm | Triplet._mcm | Triplet._rcm;
    private static readonly _nextm = Triplet._lnm | Triplet._mnm | Triplet._rnm;
    public get currentState() { return (Triplet._currentm & this._triplet) >> Triplet._rcur; }
    public get nextState() { return (Triplet._nextm & this._triplet) >> Triplet._rnext; }
    public get changed() { return this.currentState !== this.nextState; }
}

const _lookup = Array<Triplet>(1 << 12);
const _changed = Array<boolean>(1 << 12);
for (let left = 0; left < 2; left++) {
    for (let middle = 0; middle < 2; middle++) {
        for (let right = 0; right < 2; right++) {
            for (let lc = 0; lc < 8; lc++) {
                for (let mc = 0; mc < 7; mc++) {
                    for (let rc = 0; rc < 8; rc++) {
                        const t = new Triplet(0)
                            .setLeftCurrent(left === 1)
                            .setMiddleCurrent(middle === 1)
                            .setRightCurrent(right === 1)
                            .setLeftCountRaw(lc)
                            .setMiddleCountRaw(mc)
                            .setRightCountRaw(rc)
                            .setLeftNext((lc + middle === 3) || ((left === 1) && (lc + middle === 2)))
                            .setMiddleNext((left + mc + right === 3) || ((middle === 1) && (left + mc + right === 2)))
                            .setRightNext((middle + rc === 3) || ((right === 1) && (middle + rc === 2)));
                        _lookup[t.lookupKey1] = t;
                        _changed[t.lookupKey1] = t.changed;
                    }
                }
            }
        }
    }
}

export default class StaffordOneLife implements Life {
    private readonly _width = 342;
    private readonly _height = 1026;
    private _triplets: Triplet[][] = [];
    private _changes: [number, number][] = [];

    public constructor() { this.clear(); }
    public clear() {
        this._triplets = [];
        this._changes = [];

        for (let x = 0; x < this._width; x++) {
            this._triplets[x] = [];
            for (let y = 0; y < this._height; y++) {
                this._triplets[x][y] = new Triplet(0);
            }
        }
    }

    public get width() { return this._width * 3; }
    public get height() { return this._height; }

    private isValidPoint(x: number, y: number) { return 1 <= x && x < (this._width - 1) * 3 && 1 <= y && y < this._height - 1; }

    private becomeAlive(x: number, y: number) {
        const tx = Math.floor(x / 3);
        const t = this._triplets[tx][y];
        switch (x % 3) {
            case 0:
                if (t.leftCurrent) return false;
                this._triplets[tx - 1][y - 1] = this._triplets[tx - 1][y - 1].uup;
                this._triplets[tx][y - 1] = this._triplets[tx][y - 1].ppu;
                this._triplets[tx - 1][y] = this._triplets[tx - 1][y].uup;
                this._triplets[tx][y] = t.setLeftCurrent(true);
                this._triplets[tx - 1][y + 1] = this._triplets[tx - 1][y + 1].uup;
                this._triplets[tx][y + 1] = this._triplets[tx][y + 1].ppu;
                break;
            case 1:
                if (t.middleCurrent) return false;
                this._triplets[tx][y - 1] = this._triplets[tx][y - 1].ppp;
                this._triplets[tx][y] = t.setMiddleCurrent(true);
                this._triplets[tx][y + 1] = this._triplets[tx][y + 1].ppp;
                break;
            case 2:
                if (t.rightCurrent) return false;
                this._triplets[tx][y - 1] = this._triplets[tx][y - 1].upp;
                this._triplets[tx + 1][y - 1] = this._triplets[tx + 1][y - 1].puu;
                this._triplets[tx][y] = t.setRightCurrent(true);
                this._triplets[tx + 1][y] = this._triplets[tx + 1][y].puu;
                this._triplets[tx][y + 1] = this._triplets[tx][y + 1].upp;
                this._triplets[tx + 1][y + 1] = this._triplets[tx + 1][y + 1].puu;
                break;
        }
        return true;
    }

    private becomeDead(x: number, y: number) {
        const tx = Math.floor(x / 3);
        const t = this._triplets[tx][y];
        switch (x % 3) {
            case 0:
                if (!t.leftCurrent) return false;
                this._triplets[tx - 1][y - 1] = this._triplets[tx - 1][y - 1].uum;
                this._triplets[tx][y - 1] = this._triplets[tx][y - 1].mmu;
                this._triplets[tx - 1][y] = this._triplets[tx - 1][y].uum;
                this._triplets[tx][y] = t.setLeftCurrent(false);
                this._triplets[tx - 1][y + 1] = this._triplets[tx - 1][y + 1].uum;
                this._triplets[tx][y + 1] = this._triplets[tx][y + 1].mmu;
                break;
            case 1:
                if (!t.middleCurrent) return false;
                this._triplets[tx][y - 1] = this._triplets[tx][y - 1].mmm;
                this._triplets[tx][y] = t.setMiddleCurrent(false);
                this._triplets[tx][y + 1] = this._triplets[tx][y + 1].mmm;
                break;
            case 2:
                if (!t.rightCurrent) return false;
                this._triplets[tx][y - 1] = this._triplets[tx][y - 1].umm;
                this._triplets[tx + 1][y - 1] = this._triplets[tx + 1][y - 1].muu;
                this._triplets[tx][y] = t.setRightCurrent(false);
                this._triplets[tx + 1][y] = this._triplets[tx + 1][y].muu;
                this._triplets[tx][y + 1] = this._triplets[tx][y + 1].umm;
                this._triplets[tx + 1][y + 1] = this._triplets[tx + 1][y + 1].muu;
                break;
        }
        return true;
    }

    public get(x: number, y: number) {
        if (!this.isValidPoint(x, y)) return false;

        const t = this._triplets[Math.floor(x / 3)][y];
        switch (x % 3) {
            case 0: return t.leftCurrent;
            case 1: return t.middleCurrent;
            case 2: return t.rightCurrent;
        }

        // This will never be hit but tsc is being dumb
        return false;
    }

    public set(x: number, y: number, value: boolean) {
        if (!this.isValidPoint(x, y)) return;

        if (value) {
            if (this.becomeAlive(x, y)) this._changes.push([Math.floor(x / 3), y]);
        } else {
            if (this.becomeDead(x, y)) this._changes.push([Math.floor(x / 3), y]);
        }
    }

    public step() {
        const currentChanges: [number, number][] = [];
        for (let [cx, cy] of this._changes) {
            const minx = Math.max(cx - 1, 1);
            const maxx = Math.min(cx + 2, this._width - 1);
            const miny = Math.max(cy - 1, 1);
            const maxy = Math.min(cy + 2, this._height - 1);
            for (let y = miny; y < maxy; y++) {
                for (let x = minx; x < maxx; x++) {
                    const key1 = this._triplets[x][y].lookupKey1;
                    if (_changed[key1]) {
                        this._triplets[x][y] = _lookup[key1];
                        currentChanges.push([x, y]);
                    }
                }
            }
        }
        this._changes = [];

        for (let [x, y] of currentChanges) {
            const t = this._triplets[x][y];
            if (!t.changed) continue;

            if (t.leftNext) this.becomeAlive(x * 3, y);
            else this.becomeDead(x * 3, y);
            if (t.middleNext) this.becomeAlive(x * 3 + 1, y);
            else this.becomeDead(x * 3 + 1, y);
            if (t.rightNext) this.becomeAlive(x * 3 + 2, y);
            else this.becomeDead(x * 3 + 2, y);
            this._changes.push([x, y]);
        }
    }

    public draw(rect: LifeRect, setPixel: (v: LifePoint) => void) {
        const xmin = Math.max(0, rect.x);
        const xmax = Math.min(this._width * 3, rect.x + rect.width);
        const ymin = Math.max(0, rect.y - rect.height + 1);
        const ymax = Math.min(this._height, rect.y + 1);
        for (let y = ymin; y < ymax; y++) for (let x = xmin; x < xmax; x++) if (this.get(x, y)) setPixel({ x, y });
    }
}
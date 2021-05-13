import { LifePoint, Life, LifeRect, Point } from './api';
// import BoolArrayLife from './BoolArrayLife';
// import ScholesLife from './ScholesLife';
import AbrashLife from './AbrashLife';
import * as patterns from './Patterns';

const deadColor = '#333';
const aliveColor = '#909';
const gridColor = '#000';
const ticksPerSecond = 1000 / 30;

function hexStringToArr(color: string) {
    const withoutHash = color.slice(1);
    const arr: number[] = [];
    if (withoutHash.length === 3) {
        for (let i = 0; i < 3; i++) arr.push(Number(`0x${withoutHash.charAt(i).repeat(2)}`));
    } else {
        for (let i = 0; i < 6; i += 2) arr.push(Number(`0x${withoutHash.slice(i, i + 2)}`));
    }
    return arr;
}

export default class LifeView {
    // private _loopHandle: number | undefined;
    private _doLoop = true;
    private readonly _canvas: HTMLCanvasElement;
    private readonly _maxScale = 0;
    private readonly _minScale = -6;
    private _scale: number;
    private readonly _gridScale: number;
    private _corner: LifePoint;
    private readonly _life: Life;
    private _prevTime = 0;

    public constructor(canvas: string) {
        this._canvas = document.getElementById(canvas) as HTMLCanvasElement;
        this._scale = -1;
        this._gridScale = -3;
        this._corner = { x: -2, y: this.lifeHeight - 2 };
        this._life = new AbrashLife();
        patterns.addR(this._life, { x: 128, y: 128 });
        // this._life = new BoolArrayLife();
        // patterns.addBlinker(this._life, { x: 5, y: 5 });
        // patterns.addAcorn(this._life, { x: 128, y: 128 });
        // patterns.addAcorn(this._life, { x: 5, y: 5 });
        window.addEventListener('resize', this.onWindowResize.bind(this));
        this._canvas.addEventListener('wheel', this.onScroll.bind(this));
        window.addEventListener('keydown', this.onKeyDown.bind(this));
        this._canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
        this._canvas.addEventListener('mousemove', this.onMouseMove.bind(this));
        this._canvas.addEventListener('mouseup', this.onMouseUp.bind(this));
        this.onWindowResize();
        this.start();
    }

    public start() {
        this._doLoop = true;
        window.requestAnimationFrame(this.loop.bind(this));
    }

    public stop() {
        this._doLoop = false;
    }

    private onWindowResize() {
        // this._canvas.width = this._canvas.height = Math.floor(Math.min(window.innerWidth, window.innerHeight) * 0.9);
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
        this._corner = { x: -2, y: this.lifeHeight - 2 };
    }

    private onKeyDown(ev: KeyboardEvent) {
        switch (ev.key) {
            case 's':
                this.screenshot();
                break;
            case ' ':
                if (this._doLoop) this.stop();
                else this.start();
                break;
        }
    }

    private onScroll(ev: WheelEvent) {
        const v = this.bitmapToLife(ev);
        if (ev.deltaY < 0) this.zoomIn(v);
        else if (ev.deltaY > 0) this.zoomOut(v);
    }

    private _dragging = false;
    private _dragStart: LifePoint = { x: -1, y: -1 };
    private onMouseDown(ev: MouseEvent) {
        this._dragging = true;
        this._dragStart = this.bitmapToLife({ x: ev.clientX, y: ev.clientY });
    }

    private onMouseMove(ev: MouseEvent) {
        if (!this._dragging) return;

        const current = this.bitmapToLife({ x: ev.clientX, y: ev.clientY });
        this._corner = { x: this._corner.x + this._dragStart.x - current.x, y: this._corner.y + this._dragStart.y - current.y };
        this.drawDisplay();
    }

    private onMouseUp(ev: MouseEvent) {
        this._dragging = false;
    }

    private loop(time: number) {
        const deltaTime = time - this._prevTime;
        this._life.step();
        if (deltaTime >= 1000 / ticksPerSecond) {
            this.draw();
            this._prevTime = time;
        }
        if (this._doLoop) window.requestAnimationFrame(this.loop.bind(this));
    }

    private draw() {
        this.drawDisplay();
    }

    private clearDisplay() {
        const { ctx, width, height } = this;
        ctx.fillStyle = deadColor;
        ctx.fillRect(0, 0, width, height);
    }

    private drawDisplay() {
        this.clearDisplay();
        if (this._scale < 0) this.drawBlocks();
        else this.drawPixels();
    }

    private drawGrid() {
        if (!this.gridEnabled) return;

        const { ctx, width, height } = this;
        ctx.strokeStyle = gridColor;
        ctx.beginPath();

        for (let i = 0; i < width; i += 1 << -this._scale) {
            ctx.moveTo(i, 0);
            ctx.lineTo(i, height - 1);
        }
        for (let i = 0; i < height; i += 1 << -this._scale) {
            ctx.moveTo(0, i);
            ctx.lineTo(width - 1, i);
        }
        ctx.closePath();
        ctx.stroke();
    }

    private drawBlocks() {
        const { ctx } = this;
        ctx.fillStyle = aliveColor;
        const drawBlock = (v: LifePoint) => {
            const p = this.lifeToBitmap(v);
            if (this.isValidBitmapPoint(p)) ctx.fillRect(p.x, p.y, 1 << -this._scale, 1 << -this._scale);
        };
        this._life.draw(this.lifeRect, drawBlock);
        this.drawGrid();
    }

    private drawPixels() {
        const { ctx, width, height } = this;
        const data = ctx.getImageData(0, 0, width, height);
        const rgb = hexStringToArr(aliveColor);
        const drawPixel = (v: LifePoint) => {
            const p = this.lifeToBitmap(v);
            data.data[p.y * width * 4 + p.x * 4 + 0] = rgb[0];
            data.data[p.y * width * 4 + p.x * 4 + 1] = rgb[1];
            data.data[p.y * width * 4 + p.x * 4 + 2] = rgb[2];
            data.data[p.y * width * 4 + p.x * 4 + 3] = 0xff;
        };
        this._life.draw(this.lifeRect, drawPixel);
        ctx.putImageData(data, 0, 0);
    }

    private screenshot() {
        const url = this._canvas.toDataURL('image/png').replace(/^data:image\/[^;]/, 'data:application/octet-stream');
        const downloadLink = document.createElement('a');
        downloadLink.setAttribute('download', 'Life.png');
        downloadLink.setAttribute('href', url);
        downloadLink.click();
    }

    private zoomOut(v: LifePoint) {
        if (this._scale < this._maxScale) {
            this._corner = { x: 2 * this._corner.x - v.x, y: 2 * this._corner.y - v.y };
            this._scale++;
            this.drawDisplay();
        }
    }

    private zoomIn(v: LifePoint) {
        if (this._scale > this._minScale) {
            this._corner = { x: Math.floor((this._corner.x + v.x) / 2), y: Math.floor((this._corner.y + v.y) / 2) };
            this._scale--;
            this.drawDisplay();
        }
    }

    public get canvas() { return this._canvas; }
    public get scale() { return this._scale; }
    public set scale(value: number) { this._scale = value; }
    public get gridScale() { return this._gridScale; }
    public get corner() { return this._corner; }
    public set corner(value: LifePoint) { this._corner = value; }
    public get life() { return this._life; }
    public get ctx() { return this._canvas.getContext('2d')!; }
    public get width() { return this._canvas.width; }
    public get height() { return this._canvas.height; }

    public scaleUp(v: number) {
        if (this._scale >= 0) return v << this._scale;
        else return v >> -this._scale;
    }

    public scaleDown(l: number) {
        if (this._scale >= 0) return l >> this._scale;
        else return l << -this._scale;
    }

    public get lifeWidth() { return this.scaleUp(this._canvas.width); }
    public get lifeHeight() { return this.scaleUp(this._canvas.height); }
    public get lifeRect() { return new LifeRect(this._corner, this.lifeWidth, this.lifeHeight); }

    public lifeToBitmap(v: LifePoint): Point {
        return {
            x: this.scaleDown(v.x - this._corner.x),
            y: this.scaleDown(this._corner.y - v.y),
        };
    }

    public bitmapToLife(p: Point): LifePoint {
        return {
            x: this._corner.x + this.scaleUp(p.x),
            y: this._corner.y - this.scaleUp(p.y),
        };
    }

    public get gridEnabled() { return this._scale <= this._gridScale; }

    public isValidBitmapPoint(p: Point) {
        return 0 <= p.x && p.x < this._canvas.width && 0 <= p.y && p.y < this._canvas.height;
    }
}
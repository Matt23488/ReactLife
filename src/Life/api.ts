export interface Life {
    readonly width: number;
    readonly height: number;
    clear: () => void;
    get: (x: number, y: number) => boolean;
    set: (x: number, y: number, alive: boolean) => void;
    draw: (rect: LifeRect, setPixel: (v: LifePoint) => void) => void;
    step: () => void;
}

export interface Point {
    readonly x: number;
    readonly y: number;
}

export type LifePoint = Point;

export class LifeRect {
    public readonly corner: LifePoint;
    public readonly width: number;
    public readonly height: number;

    public constructor(corner: LifePoint, width: number, height: number)
    public constructor(x: number, y: number, width: number, height: number)
    public constructor(cornerOrX: LifePoint | number, widthOrY: number, heightOrWidth: number, height?: number) {
        if (typeof cornerOrX === 'number') {
            this.corner = { x: cornerOrX, y: widthOrY };
            this.width = heightOrWidth;
            this.height = height!;
        } else {
            this.corner = cornerOrX;
            this.width = widthOrY;
            this.height = heightOrWidth;
        }
    }

    public get x() { return this.corner.x; }
    public get y() { return this.corner.y; }
}
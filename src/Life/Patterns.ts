import { Life, LifePoint } from './api';

export function addBlinker(life: Life, corner: LifePoint) {
    const { x, y } = corner;
    life.set(x, y, true);
    life.set(x, y - 1, true);
    life.set(x, y - 2, true);
}

export function addAcorn(life: Life, corner: LifePoint) {
    const { x, y } = corner;
    life.set(x + 1, y, true);
    life.set(x + 3, y - 1, true);
    life.set(x, y - 2, true);
    life.set(x + 1, y - 2, true);
    life.set(x + 4, y - 2, true);
    life.set(x + 5, y - 2, true);
    life.set(x + 6, y - 2, true);
}

export function addR(life: Life, corner: LifePoint) {
    const { x, y } = corner;
    life.set(x + 1, y + 0, true);
    life.set(x + 2, y + 0, true);
    life.set(x + 0, y - 1, true);
    life.set(x + 1, y - 1, true);
    life.set(x + 1, y - 2, true);
}
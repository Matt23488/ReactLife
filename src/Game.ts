// TODO: Pull in the canvas stuff, but right now it's so tied to the LifeView class
// that I'm too lazy to separate it
export default abstract class Game {
    public renderTime: number;
    private readonly _limitTick: boolean;
    private _lastRenderTime = 0;
    private _lastTickTime = 0;

    protected constructor(renderTime: number, limitTick = false) {
        this.renderTime = renderTime;
        this._limitTick = limitTick;
    }

    protected abstract render(deltaRenderTime: number): void;
    protected abstract tick(deltaTickTime: number): void;

    private loop(time: number) {
        const deltaRenderTime = time - this._lastRenderTime;
        const deltaTickTime = time - this._lastTickTime;
        if (!this._limitTick) {
            this.tick(deltaTickTime);
            this._lastTickTime = time;
        }
        if (deltaRenderTime >= this.renderTime) {
            if (this._limitTick) {
                this.tick(deltaTickTime);
                this._lastTickTime = time;
            }
            this.render(deltaRenderTime);
            this._lastRenderTime = time;
        }
        if (this._doLoop) window.requestAnimationFrame(this.loop.bind(this));
    }

    private _doLoop = false;
    public get running() { return this._doLoop; }

    public start() {
        this._doLoop = true;
        window.requestAnimationFrame(this.loop.bind(this));
    }

    public stop() {
        this._doLoop = false;
    }
}
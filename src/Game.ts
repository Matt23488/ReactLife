// TODO: Pull in the canvas stuff, but right now it's so tied to the LifeView class
// that I'm too lazy to separate it
export default abstract class Game {
    private _tickTime: number;
    public renderTime: number;

    protected constructor(tickTime: number) {
        this._tickTime = tickTime;
        this.renderTime = 100 / 6;
    }

    protected abstract render(deltaRenderTime: number): void;
    protected abstract tick(): void;

    public set tickTime(value: number) {
        this._tickTime = value;
        if (this.running) {
            window.clearInterval(this._tickLoopHandle);
            this._tickLoopHandle = window.setInterval(this.tickLoop.bind(this), this._tickTime);
        }
    }

    private _doLoop = false;
    public get running() { return this._doLoop; }

    private _tickLoopHandle = 0;
    private tickLoop(time: number) {
        this.tick();
    }
    
    private _lastRenderTime = 0;
    private renderLoop(time: number) {
        const deltaTime = time - this._lastRenderTime;
        if (deltaTime >= this.renderTime) {
            this.render(deltaTime);
            this._lastRenderTime = time;
        }
        if (this._doLoop) window.requestAnimationFrame(this.renderLoop.bind(this));
    }

    public start() {
        console.log(this._tickTime);
        this._doLoop = true;
        window.requestAnimationFrame(this.renderLoop.bind(this));
        this._tickLoopHandle = window.setInterval(this.tickLoop.bind(this), this._tickTime);
    }

    public stop() {
        this._doLoop = false;
        window.clearInterval(this._tickLoopHandle);
    }
}
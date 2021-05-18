import React from 'react';
import { FaPlay, FaPause, FaFastBackward, FaStepForward } from 'react-icons/fa';
import LifeView from './Life/LifeView';
import { allPatterns, PatternName} from './Life/Patterns';

import './LifeComponent.css';
import Range from './Range';

interface LifeComponentState {
    lifeData?: LifeView;
    selectedPattern: PatternName;
    speed: number;
}

// https://github.com/ericlippert/ConwaysLife/tree/episode11
// https://ericlippert.com/2020/06/15/life-part-15/
export class LifeComponent extends React.Component<{}, LifeComponentState> {

    public constructor(props: {}) {
        super(props);

        this.state = {
            selectedPattern: 'puffer2',
            speed: 5,
        };
    }

    private onPatternChange(ev: React.ChangeEvent<HTMLSelectElement>) {
        if (!this.state.lifeData) return;

        const selectedPattern = ev.target.value as PatternName;

        if (this.state.lifeData.running) this.state.lifeData.stop();
        // eslint-disable-next-line
        this.state.lifeData.pattern = allPatterns[selectedPattern];

        this.setState({ selectedPattern });
    }

    private onToggleRunning() {
        if (!this.state.lifeData) return;
        if (this.state.lifeData.running) this.state.lifeData.stop();
        else this.state.lifeData.start();
    }

    private onReset() {
        if (!this.state.lifeData) return;

        if (this.state.lifeData.running) this.state.lifeData.stop();
        // eslint-disable-next-line
        this.state.lifeData.pattern = allPatterns[this.state.selectedPattern];
    }

    private onStepForward() {
        if (!this.state.lifeData) return;

        this.state.lifeData.step();
    }

    private onSpeedChange(dir: 1 | -1) {
        const clamp = (min: number, max: number, val: number) => Math.min(max, Math.max(min, val));
        if (!this.state.lifeData) return;

        const speed = clamp(0, 15, this.state.speed + dir);
        // eslint-disable-next-line
        this.state.lifeData.tickTime = 1000 / 2**speed;

        this.setState({ speed });
    }

    public componentDidMount() {
        const lifeData = new LifeView('lifeCanvas', 1000 / 2**this.state.speed);
        this.setState({ lifeData });
    }

    public componentWillUnmount() {
        this.state.lifeData?.stop();
    }

    public render() {
        return (
            <div className="Life">
                <canvas className="LifeCanvas" id="lifeCanvas" />
                <div className="LifeControls">
                    <select value={this.state.selectedPattern} onChange={this.onPatternChange.bind(this)}>
                        {Object.keys(allPatterns).map(key => (
                            <option key={key} value={key}>{key}</option>
                        ))}
                    </select>
                    <Range min={0} max={15} step={1} value={this.state.speed} onChange={this.onSpeedChange.bind(this)} />
                    <button onClick={this.onReset.bind(this)}><FaFastBackward /></button>
                    <button onClick={this.onToggleRunning.bind(this)}><FaPlay /><FaPause /></button>
                    <button onClick={this.onStepForward.bind(this)}><FaStepForward /></button>
                </div>
            </div>
        );
    }
}
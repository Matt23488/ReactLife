import React from 'react';
import { FaPlay, FaPause, FaFastBackward, FaStepForward } from 'react-icons/fa';
import LifeView from './Life/LifeView';
import { allPatterns, PatternName} from './Life/Patterns';

import './LifeComponent.css';

interface LifeComponentState {
    lifeData?: LifeView;
    selectedPattern: PatternName;
    renderTime: number;
}

// https://github.com/ericlippert/ConwaysLife/tree/episode11
// https://ericlippert.com/2020/06/15/life-part-15/
export class LifeComponent extends React.Component<{}, LifeComponentState> {

    public constructor(props: {}) {
        super(props);

        this.state = {
            selectedPattern: 'puffer2',
            renderTime: 10,
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

    private onRenderTimeChange(ev: React.ChangeEvent<HTMLInputElement>) {
        if (!this.state.lifeData) return;

        const tickTime = Number(ev.target.value);
        if (isNaN(tickTime)) return;

        // eslint-disable-next-line
        this.state.lifeData.renderTime = tickTime;

        this.setState({ renderTime: tickTime });
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

    public componentDidMount() {
        const lifeData = new LifeView('lifeCanvas', this.state.renderTime);
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
                    <input type="number" value={this.state.renderTime} onChange={this.onRenderTimeChange.bind(this)} min={10} max={250} step={10} />
                    <button onClick={this.onReset.bind(this)}><FaFastBackward /></button>
                    <button onClick={this.onToggleRunning.bind(this)}><FaPlay /><FaPause /></button>
                    <button onClick={this.onStepForward.bind(this)}><FaStepForward /></button>
                </div>
            </div>
        );
    }
}
import React from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import LifeView from './Life/LifeView';
import * as patterns from './Life/Patterns';

import './LifeComponent.css';

interface LifeComponentState {
    lifeData?: LifeView;
    selectedPattern: string;
}

// https://github.com/ericlippert/ConwaysLife/tree/episode11
// https://ericlippert.com/2020/06/15/life-part-15/
export class LifeComponent extends React.Component<{}, LifeComponentState> {

    public constructor(props: {}) {
        super(props);

        this.state = { selectedPattern: 'puffer2' };
    }

    private onPatternChange(ev: React.ChangeEvent<HTMLSelectElement>) {
        if (!this.state.lifeData) return;

        if (this.state.lifeData.running) this.state.lifeData.stop();
        this.state.lifeData.pattern = patterns.allPatterns[ev.target.value];

        this.setState({ selectedPattern: ev.target.value });
    }

    private onToggleRunning() {
        if (!this.state.lifeData) return;
        if (this.state.lifeData.running) this.state.lifeData.stop();
        else this.state.lifeData.start();
    }

    public componentDidMount() {
        const lifeData = new LifeView('lifeCanvas');
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
                        {Object.keys(patterns.allPatterns).map(key => (
                            <option key={key} value={key}>{key}</option>
                        ))}
                    </select>
                    <button onClick={this.onToggleRunning.bind(this)}><FaPlay /><FaPause /></button>
                </div>
            </div>
        );
    }
}
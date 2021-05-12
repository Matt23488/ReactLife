import React from 'react';
import LifeView from './Life/LifeView';

import './Life.css';

interface LifeComponentState {
    lifeData?: LifeView
}

// https://github.com/ericlippert/ConwaysLife/tree/episode11
// https://ericlippert.com/2020/05/21/life-part-11/
export class LifeComponent extends React.Component<{}, LifeComponentState> {

    public componentDidMount() {
        const lifeData = new LifeView('lifeCanvas');
        this.setState({ lifeData });
    }

    public componentWillUnmount() {
        this.state.lifeData?.stop();
    }

    public render() {
        return <canvas className="Life" id="lifeCanvas" />
    }
}
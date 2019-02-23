import * as React from 'react';

import PlaygroundScene from './PlaygroundScene';

class Playground extends React.Component {
    constructor(props) {
        super(props);
    }
    render = () => {
        return (
            <PlaygroundScene />
        );
    }
}

export default Playground;
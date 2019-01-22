import * as React from 'react';
import ToolBox from './ToolBox';
import PropertyGrid from './PropertyGrid';
import Scene from './Scene';

interface Props {
    tools: []
}

class Designer extends React.Component<any, any>
{
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <ToolBox tools={this.props.tools} />
                    </div>
                    <div className="col-6">
                        <Scene scene = {this.props.scene} />
                    </div>
                    <div className="col-3">
                        <PropertyGrid />
                    </div>
                </div>
            </div>
        );
    }
}

export default Designer
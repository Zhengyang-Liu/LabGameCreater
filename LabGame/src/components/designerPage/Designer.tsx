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
        console.log(this.props.tools);
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <ToolBox tools={this.props.tools}/>
                    </div>
                    <div className="col-6">
                        <Scene x={0} y={0} width={400} height={400} angle={0} />
                    </div>
                    <div className="col-3">
                        <PropertyGrid/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Designer
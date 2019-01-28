import * as React from 'react';
import ToolBox from '../container/ToolBox';
import Scene from '../container/Scene';
import PropertyGrid from './PropertyGrid';

interface Props {
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
                        <ToolBox/>
                    </div>
                    <div className="col-6">
                        <Scene/>
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
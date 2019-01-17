import * as React from 'react';
import ToolBox from './ToolBox';
import PropertyGrid from './PropertyGrid';
import Scene from './Scene';


class Designer extends React.Component<any, any>
{
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
                        <PropertyGrid/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Designer
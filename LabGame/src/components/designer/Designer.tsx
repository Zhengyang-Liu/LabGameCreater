import * as React from 'react';

import Scene from '../../container/Scene';
import ToolBox from '../../container/ToolBox';
import Menu from './Menu';
import PropertyPanel from './propertyPanel/PropertyPanel';

class Designer extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className="container">
                <div className="row">
                    <Menu></Menu>
                </div>
                <div className="row">
                    <div className="col-2 border">
                        <ToolBox />
                    </div>
                    <div className="col-7 border">
                        <Scene />
                    </div>
                    <div className="col-3 border">
                        <PropertyPanel />
                    </div>
                </div>
            </div>
        );
    }
}

export default Designer
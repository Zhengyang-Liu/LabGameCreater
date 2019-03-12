import * as React from 'react';

import * as Types from '../../types';
import { ComponentDictionary } from './items/ComponentDictionary';

function RenderItem({ item }) {
    let props = {
        item: item,
        key: item.id
    }
    let reactElement = React.createElement(ComponentDictionary[item.type], props)
    return reactElement;
}

interface Props {
    scene: Types.Scene
}

interface State {
}

class Scene extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }

    render = () => {
        if (this.props.scene.objective.length == 0) {
            return <div></div>
        }

        let JSXItems = this.props.scene.items.map((item) =>
            <RenderItem item={item}></RenderItem>
        )
        
        return (
            <div className="container">
                {JSXItems}
            </div>
        );
    }
}

export default Scene;

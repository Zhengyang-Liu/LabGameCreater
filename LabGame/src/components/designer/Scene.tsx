import * as React from 'react';

import { ComponentDictionary } from './items/ComponentDictionary';
import * as Types from '../../types';

function RenderItem({ item }) {
    let props = {
        item: item,
        key: item.id
    }
    let reactElement = React.createElement(ComponentDictionary[item.type], props)
    return reactElement;
}

interface Props {
    fetchScene: Function,
    scene: Types.Scene
}

class Scene extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.props.fetchScene();
    }
    
    render() {
        return (
            <div>
                {this.props.scene.items.map((item) =>
                    <RenderItem item={item}></RenderItem>
                )}
            </div>
        )
    }
}

export default (Scene);
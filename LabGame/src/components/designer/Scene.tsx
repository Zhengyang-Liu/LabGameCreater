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
    scene: Types.Scene,
}

class Scene extends React.Component<Props> {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.scene != null) {
            return (
                <div>
                    {this.props.scene.items.map((item) =>
                        <RenderItem key={item.id} item={item}></RenderItem>
                    )}
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }

    }
}

export default Scene;
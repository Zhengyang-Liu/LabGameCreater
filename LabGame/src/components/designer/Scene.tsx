import * as React from 'react';
import { COMPONENTS } from '../../shared/ComponentDictionary'

function RenderItem({ item }) {
    let props = {
        item: item,
        key: item.id
    }
    let reactElement = React.createElement(COMPONENTS[item.type], props)
    return (reactElement);
}

interface SceneProps {
    fetchScene: Function,
    scene: any
}

class Scene extends React.Component<SceneProps> {
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
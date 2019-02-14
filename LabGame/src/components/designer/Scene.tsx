import * as React from 'react';
import { COMPONENTS } from '../../shared/ComponentDictionary'

function RenderItem({ item }) {
    let reactElement = React.createElement(COMPONENTS[item.type], item.transform)
    return (reactElement);
}

interface SceneProps{
    fetchItems: Function,
    scene: any
}

class Scene extends React.Component<SceneProps> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchItems();
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
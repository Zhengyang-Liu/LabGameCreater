import * as React from 'react';
import { COMPONENTS } from '../../shared/ComponentDictionary'
import * as types from './../../types'

function RenderItem({ item }) {
    let props = {
        item: item,
        key: item.id
    }
    let reactElement = React.createElement(COMPONENTS[item.type], props)
    return reactElement;
}

interface Props {
    fetchScene: Function,
    scene: types.Scene
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
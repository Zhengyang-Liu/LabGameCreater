import * as React from 'react';
import * as Types from '../../types';
import { ComponentDictionary } from './items/ComponentDictionary';

interface Props {
    scene: Types.Scene,
}

class Scene extends React.Component<Props> {
    constructor(props) {
        super(props);
    }
    renderItem = ({ item }) => {
        let props = {
            item: item,
            key: item.id
        }
        let reactElement = React.createElement(ComponentDictionary[item.type], props)
        return reactElement;
    }

    render() {
        if (this.props.scene != null && this.props.scene.items.length > 0) {
            return (
                <div>
                    {this.props.scene.items.map((item) =>
                        <this.renderItem key={item.id} item={item}></this.renderItem>
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
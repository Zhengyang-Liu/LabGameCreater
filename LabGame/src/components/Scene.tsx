import * as React from 'react';
import { COMPONENTS } from '../shared/ComponentDictionary'

function RenderItem({ item }) {
    var item: any = React.createElement(COMPONENTS[item.type], item.transform)
    return (item);
}


class Scene extends React.Component<any, any> {
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
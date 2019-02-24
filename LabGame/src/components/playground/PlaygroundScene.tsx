import * as React from 'react';
import { connect } from 'react-redux';

import { fetchScene } from '../../redux/ActionCreators';
import * as Types from '../../types';
import { ComponentDictionary } from './items/ComponentDictionary';

function RenderItem({ item }) {
    let reactElement = React.createElement(ComponentDictionary[item.type], {
        item: item,
        key: item.id
    })
    return reactElement;
}

interface Props {
    fetchScene: Function,
    scene: Types.Scene
}


class PlaygroundScene extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.props.fetchScene();

    }

    render = () => {
        return (
            <div className="container">
                {this.props.scene.items.map((item) =>
                    <RenderItem item={item} key={item.id}></RenderItem>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    scene: state.scene
})

const mapDispatchToProps = (dispatch) => ({
    fetchScene: () => { dispatch(fetchScene()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaygroundScene);

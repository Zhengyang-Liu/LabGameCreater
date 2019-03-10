import * as React from 'react';
import { connect } from 'react-redux';
import { setInterval } from 'timers';

import { fetchScene } from '../../redux/ActionCreators';
import * as Types from '../../types';
import Instruction from './Instruction';
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
    fetchScene: Function,
    scene: Types.Scene
}

interface State {
    winState: boolean,
    items: any[]
}

class PlaygroundScene extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        setInterval(this.update, 100);

        this.state = {
            winState: false,
            items: []
        }
    }

    componentDidMount = () => {
        this.props.fetchScene();
    }

    update = () => {
        this.checkWin();
    }

    checkWin = () => {
        if (this.state.winState == true)
            return;
        this.props.scene.items.forEach((item) => {
            let objectivePropertyName = this.props.scene.objective[0].property.name;
            let objectivePropertyValue = this.props.scene.objective[0].property.value;
            let itemPropertyValue = item.property[objectivePropertyName];
            if (this.props.scene.objective[0].item == item.name && itemPropertyValue == objectivePropertyValue) {
                this.showSuccess();
                this.setState({
                    winState: true
                })
            }
        })
    }

    showSuccess = () => {
        alert("YOU DID IT!")
    }

    render = () => {
        let JSXItems = this.props.scene.items.map((item) =>
            <RenderItem item={item}></RenderItem>
        )
        return (
            <div className="container">
                <div>
                    <Instruction text={this.props.scene.objective[0].description}></Instruction>
                </div>
                {JSXItems}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    scene: state.sceneInfo.scene,
})

const mapDispatchToProps = (dispatch) => ({
    fetchScene: () => { dispatch(fetchScene()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaygroundScene);

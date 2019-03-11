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
    items: any[],
    currentStepNumber: number,
}

class PlaygroundScene extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        setInterval(this.update, 100);

        this.state = {
            winState: false,
            items: [],
            currentStepNumber: 0,
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

        if (this.checkStep(this.props.scene.objective[this.state.currentStepNumber])) {
            if (this.state.currentStepNumber == this.props.scene.objective.length - 1) {
                this.showSuccess();
                this.setState({
                    winState: true
                })
            } else {
                this.setState({ currentStepNumber: this.state.currentStepNumber + 1 })
            }
        }
    }

    checkStep = (step: Types.Step): boolean => {
        let returnValue: boolean = false;
        this.props.scene.items.forEach((item) => {
            let objectivePropertyName = step.property.name;
            let objectivePropertyValue = step.property.value;
            let itemPropertyValue = item.property[objectivePropertyName];
            if (step.item == item.name && itemPropertyValue == objectivePropertyValue) {
                returnValue = true;
            }
        })
        return returnValue;
    }

    showSuccess = () => {
        alert("YOU DID IT!")
    }

    render = () => {
        if(this.props.scene.objective.length == 0)
        {
            return<div></div>
        }

        let JSXItems = this.props.scene.items.map((item) =>
            <RenderItem item={item}></RenderItem>
        )
        return (
            <div className="container">
                <div>
                    <Instruction text={this.props.scene.objective[this.state.currentStepNumber].description}></Instruction>
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

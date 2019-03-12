import * as React from 'react';
import { connect } from 'react-redux';

import { fetchScene } from '../../redux/ActionCreators';
import * as Types from '../../types';
import ObjectivePanel from './ObjectivePanel';
import Scene from './Scene';

interface Props {
    fetchScene: Function,
    scene: Types.Scene
}

interface State {
    winState: boolean,
    currentStepNumber: number,
}

class Playground extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        setInterval(this.update, 100);

        this.state = {
            winState: false,
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
        return (
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <Scene scene={this.props.scene} />
                    </div>
                    <div className="col-3">
                        <ObjectivePanel currentStepNumber={this.state.currentStepNumber} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchScene: () => { dispatch(fetchScene()) }
})

const mapStateToProps = state => ({
    scene: state.sceneInfo.scene,
})

export default connect(mapStateToProps, mapDispatchToProps)(Playground);

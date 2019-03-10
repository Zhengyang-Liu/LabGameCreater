import * as React from 'react';
import { connect } from 'react-redux';
import { actions, Control } from 'react-redux-form';
import {
    Button, Card, CardHeader, Col, Collapse, FormGroup, Label, Row, UncontrolledCollapse
} from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';

import * as types from '../../../types';
import { addStep } from '../../../redux/ActionCreators';

interface Props {
    scene: types.Scene,
    addStep: Function,
}

interface State {
}

class SceneProperty extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }

    handleItemChange = (stepNumber: number, event) => {
        this.props.scene.objective[stepNumber].item = event.target.value;
    }

    handleDescriptionChange = (stepNumber: number, event) => {
        this.props.scene.objective[stepNumber].description = event.target.value;
    }

    handlePropertyNameChange = (stepNumber: number, event) => {
        this.props.scene.objective[stepNumber].property.name = event.target.value;
    }

    handlePropertyValueChange = (stepNumber: number, event) => {
        this.props.scene.objective[stepNumber].property.value = event.target.value;
    }

    getItems = () => {
        const items = this.props.scene.items.map(item => {
            return (
                <option key={item.name}>{item.name}</option>
            );
        })

        return items;
    }

    singleStep = (stepNumber: number) => {
        return (
            <div>
                <Card>
                    <CardHeader id={"toggler" + stepNumber} tag="p" style={{ cursor: 'pointer', padding: "5px" }}>
                        Step {stepNumber}
                    </CardHeader>
                    <UncontrolledCollapse toggler={"#toggler" + stepNumber}>
                        <CardBody style={{ padding: "5px" }}>
                            <FormGroup>
                                <Label>Item</Label>
                                <Control.select
                                    model={"sceneInfo.scene.objective[" + stepNumber + "].item"}
                                    className="form-control"
                                    onChange={(e) => this.handleItemChange(stepNumber, e)}
                                >
                                    {this.getItems()}
                                </Control.select>
                            </FormGroup>
                            <FormGroup>
                                <Label>Property</Label>
                                <Row>
                                    <Col md={{ size: 6 }}>
                                        <Control.text
                                            model={"sceneInfo.scene.objective[" + stepNumber + "].property.name"}
                                            className="form-control"
                                            placeholder="Name"
                                            onChange={(e) => this.handlePropertyNameChange(stepNumber, e)}
                                        ></Control.text>
                                    </Col>
                                    <Col md={{ size: 6 }}>
                                        <Control.text
                                            model={"sceneInfo.scene.objective[" + stepNumber + "].property.value"}
                                            className="form-control"
                                            placeholder="Value"
                                            onChange={(e) => this.handlePropertyValueChange(stepNumber, e)}
                                        ></Control.text>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Label>Description</Label>
                                <Control.text
                                    model={"sceneInfo.scene.objective[" + stepNumber + "].description"}
                                    className="form-control"
                                    placeholder="description of the object"
                                    onChange={(e) => this.handleDescriptionChange(stepNumber, e)}
                                    updateOn="change"
                                ></Control.text>
                            </FormGroup>
                        </CardBody>
                    </UncontrolledCollapse >
                </Card>
            </div>
        )
    }

    render = () => {
        if (this.props.scene == null) {
            return (<div></div>)
        }

        const steps = this.props.scene.objective.map((step, index) => {
            return (this.singleStep(index))
        })

        return (
            <div>
                <h5>Objective Setttings</h5>
                {steps}
                <Button onClick={() => this.props.addStep()}>Add Step</Button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addStep: () => dispatch(addStep())
})

export default connect(null, mapDispatchToProps)(SceneProperty);
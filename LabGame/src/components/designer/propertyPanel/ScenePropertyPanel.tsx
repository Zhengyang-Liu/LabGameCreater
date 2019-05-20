import * as React from 'react';
import { connect } from 'react-redux';
import { Control } from 'react-redux-form';
import {
    Button, Card, CardBody, CardHeader, Col, FormGroup, Label, Row, UncontrolledCollapse
} from 'reactstrap';

import {
    addObjectiveProperty, addObjectiveStep, handleObjectiveItemChange,
    handleObjectivePropertyNameChange, handleObjectivePropertyValueChange, removeObjectiveProperty,
    removeObjectiveStep
} from '../../../redux/ActionCreators';
import * as Types from '../../../types';
import { PropertyComponentDictionary } from './PropertyComponentDictionary';

interface Props {
    scene: Types.Scene,
    addObjectiveStep: Function,
    removeObjectiveStep: Function,
    addObjectiveProperty: Function,
    removeObjectiveProperty: Function,
    handleObjectiveItemChange: Function,
    handleObjectivePropertyNameChange: Function,
    handleObjectivePropertyValueChange: Function,
}

interface State {
}

class ScenePropertyPanel extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }
    handleItemChange = (stepNumber: number, propertyNumber: number, event) => {
        this.props.handleObjectiveItemChange(stepNumber, propertyNumber, event.target.value);
    }

    handlePropertyNameChange = (stepNumber: number, propertyNumber: number, event) => {
        this.props.handleObjectivePropertyNameChange(stepNumber, propertyNumber, event.target.value);
    }

    handlePropertyValueChange = (stepNumber: number, propertyNumber: number, event) => {
        this.props.handleObjectivePropertyValueChange(stepNumber, propertyNumber, event.target.value);
    }

    getItems = () => {
        const items = this.props.scene.items.map(item => {
            return (
                <option key={item.name}>{item.name}</option>
            );
        })
        items.unshift(<option key={""}>{""}</option>);
        return items;
    }

    getProperties = (stepNumber: number, propertyNumber: number) => {
        let selectedItem;

        this.props.scene.items.forEach(item => {
            if (item.name == this.props.scene.objective[stepNumber].property[propertyNumber].item) {
                selectedItem = item;
            }
        });

        if (selectedItem != undefined) {
            let keys = Object.keys(selectedItem.property);
            const properties = keys.map(property => {
                return (
                    <option key={property}>{property}</option>
                );
            })
            properties.unshift(<option key={""}>{""}</option>);
            return properties;
        } else {
            return [];
        }
    }

    singleProperty = (stepNumber: number, propertyNumber: number) => {

        let propertyComponentProps = {
            onChangeHander: (e) => this.handlePropertyValueChange(stepNumber, propertyNumber, e),
            model: "sceneInfo.scene.objective[" + stepNumber + "].property[" + propertyNumber + "].value"
        }
        let propertyName = this.props.scene.objective[stepNumber].property[propertyNumber].name
        let propertyComponent;
        if (propertyName != "") {
            propertyComponent = React.createElement(PropertyComponentDictionary[propertyName].component, propertyComponentProps);
        } else {
            propertyComponent = null;
        }

        return (
            <>
                <Row>
                    <Col>
                        <Control.select
                            model={"sceneInfo.scene.objective[" + stepNumber + "].property[" + propertyNumber + "].item"}
                            className="form-control"
                            onChange={(e) => this.handleItemChange(stepNumber, propertyNumber, e)}
                        >
                            {this.getItems()}
                        </Control.select>
                    </Col>
                    <Col>
                        <Button close
                            onClick={() => {
                                this.props.removeObjectiveProperty(stepNumber, propertyNumber);
                                this.forceUpdate();
                            }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={{ size: 6 }}>
                        <Control.select
                            model={"sceneInfo.scene.objective[" + stepNumber + "].property[" + propertyNumber + "].name"}
                            className="form-control"
                            placeholder="Name"
                            onChange={(e) => this.handlePropertyNameChange(stepNumber, propertyNumber, e)}
                        >
                            {this.getProperties(stepNumber, propertyNumber)}
                        </Control.select>
                    </Col>
                    <Col md={{ size: 6 }}>
                        {propertyComponent}
                    </Col>
                </Row>
            </>
        )
    }

    singleStep = (stepNumber: number) => {
        const properties = this.props.scene.objective[stepNumber].property.map((property, index) => {
            return (this.singleProperty(stepNumber, index))
        })

        return (
            <div style={{ paddingBottom: "5px" }}>
                <Card>
                    <CardHeader id={"toggler" + stepNumber} tag="p" style={{ cursor: 'pointer', padding: "5px" }}>
                        Step {stepNumber}
                        <Button close
                            onClick={() => {
                                this.props.removeObjectiveStep(stepNumber);
                                this.forceUpdate();
                            }}
                        >
                        </Button>
                    </CardHeader>
                    <UncontrolledCollapse toggler={"#toggler" + stepNumber}>
                        <CardBody style={{ padding: "5px" }}>
                            <FormGroup>
                                <Label>Item Property</Label>
                                <Button close aria-label="Add"
                                    onClick={() => {
                                        this.props.addObjectiveProperty(stepNumber);
                                        this.forceUpdate();
                                    }}
                                >
                                    <span aria-hidden>+</span>
                                </Button>
                                {properties}
                            </FormGroup>
                            <FormGroup>
                                <Label>Title</Label>
                                <Control.text
                                    model={"sceneInfo.scene.objective[" + stepNumber + "].title"}
                                    className="form-control"
                                    placeholder="title of this objective"
                                    updateOn="change"
                                ></Control.text>
                            </FormGroup>
                            <FormGroup>
                                <Label>Description</Label>
                                <Control.textarea
                                    rows={3}
                                    model={"sceneInfo.scene.objective[" + stepNumber + "].description"}
                                    className="form-control"
                                    placeholder="description of this objective"
                                    updateOn="change"
                                ></Control.textarea>
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
                <h5>Objective Settings</h5>
                {steps}
                <Button onClick={() => this.props.addObjectiveStep()}>Add Step</Button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addObjectiveStep: () => dispatch(addObjectiveStep()),
    removeObjectiveStep: (stepNumber: number) => dispatch(removeObjectiveStep(stepNumber)),
    addObjectiveProperty: (stepNumber: number) => dispatch(addObjectiveProperty(stepNumber)),
    removeObjectiveProperty: (stepNumber: number, propertyNumber: number) => dispatch(removeObjectiveProperty(stepNumber, propertyNumber)),
    handleObjectiveItemChange: (stepNumber: number, propertyNumber: number, value: string) => dispatch(handleObjectiveItemChange(stepNumber, propertyNumber, value)),
    handleObjectivePropertyNameChange: (stepNumber: number, propertyNumber: number, value: string) => dispatch(handleObjectivePropertyNameChange(stepNumber, propertyNumber, value)),
    handleObjectivePropertyValueChange: (stepNumber: number, propertyNumber: number, value: string) => dispatch(handleObjectivePropertyValueChange(stepNumber, propertyNumber, value)),
})

const mapStateToProps = (state) => ({
    scene: state.sceneInfo.scene
})

export default connect(mapStateToProps, mapDispatchToProps)(ScenePropertyPanel);
import * as React from 'react';
import { connect } from 'react-redux';
import { Control } from 'react-redux-form';
import {
    Button, Card, CardBody, CardHeader, Col, FormGroup, Label, Row, UncontrolledCollapse
} from 'reactstrap';

import { addProperty, addStep } from '../../../redux/ActionCreators';
import * as Types from '../../../types';
import { PropertyComponentDictionary } from './PropertyComponentDictionary';

interface Props {
    scene: Types.Scene,
    addStep: Function,
    addProperty: Function,
}

interface State {
}

class ScenePropertyPanel extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }

    handleTitleChange = (stepNumber: number, event) => {
        this.props.scene.objective[stepNumber].title = event.target.value;
    }

    handleDescriptionChange = (stepNumber: number, event) => {
        this.props.scene.objective[stepNumber].description = event.target.value;
    }

    handleItemChange = (stepNumber: number, propertyNumber: number, event) => {
        this.props.scene.objective[stepNumber].property[propertyNumber].item = event.target.value;
        this.forceUpdate();
    }

    handlePropertyNameChange = (stepNumber: number, propertyNumber: number, event) => {
        this.props.scene.objective[stepNumber].property[propertyNumber].name = event.target.value;
        this.props.scene.objective[stepNumber].property[propertyNumber].value = "";
        this.forceUpdate();
    }

    handlePropertyValueChange = (stepNumber: number, propertyNumber: number, event) => {
        this.props.scene.objective[stepNumber].property[propertyNumber].value = event.target.value;
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
                <Control.select
                    model={"sceneInfo.scene.objective[" + stepNumber + "].property[" + propertyNumber + "].item"}
                    className="form-control"
                    onChange={(e) => this.handleItemChange(stepNumber, propertyNumber, e)}
                >
                    {this.getItems()}
                </Control.select>
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
            <div>
                <Card>
                    <CardHeader id={"toggler" + stepNumber} tag="p" style={{ cursor: 'pointer', padding: "5px" }}>
                        Step {stepNumber}
                    </CardHeader>
                    <UncontrolledCollapse toggler={"#toggler" + stepNumber}>
                        <CardBody style={{ padding: "5px" }}>
                            <FormGroup>
                                <Label>Item Property</Label>
                                <Button className="fa fa-plus float-sm-right"
                                    onClick={() => {
                                        this.props.addProperty(stepNumber);
                                        this.forceUpdate();
                                    }}
                                />
                                {properties}
                            </FormGroup>
                            <FormGroup>
                                <Label>Title</Label>
                                <Control.text
                                    model={"sceneInfo.scene.objective[" + stepNumber + "].title"}
                                    className="form-control"
                                    placeholder="title of this objective"
                                    onChange={(e) => this.handleTitleChange(stepNumber, e)}
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
                                    onChange={(e) => this.handleDescriptionChange(stepNumber, e)}
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
                <Button onClick={() => this.props.addStep()}>Add Step</Button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addStep: () => dispatch(addStep()),
    addProperty: (stepNumber: number) => dispatch(addProperty(stepNumber)),
})

export default connect(null, mapDispatchToProps)(ScenePropertyPanel);
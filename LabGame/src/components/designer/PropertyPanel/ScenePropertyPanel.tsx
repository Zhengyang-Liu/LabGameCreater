import * as React from 'react';
import { Control } from 'react-redux-form';
import { Col, FormGroup, Label, Row } from 'reactstrap';

import * as types from '../../../types';

interface Props {
    scene: types.Scene
}

class SceneProperty extends React.Component<Props, any> {
    constructor(props) {
        super(props);
    }

    handleItemChange = (event) => {
        this.props.scene.objective.item = event.target.value;
    }

    handleDescriptionChange = (event) => {
        this.props.scene.objective.description = event.target.value;
    }

    handlePropertyNameChange = (event) => {
        this.props.scene.objective.property.name = event.target.value;
    }

    handlePropertyValueChange = (event) => {
        this.props.scene.objective.property.value = event.target.value;
    }

    render = () => {
        const items = this.props.scene.items.map(item => {
            return (
                <option>{item.name}</option>
            );
        })
        return (
            <div>
                <h4>Objective Settings</h4>
                <FormGroup>
                    <Label>Item</Label>
                    <Control.select
                        model=".item"
                        className="form-control"
                        onChange={this.handleItemChange}
                        defaultValue={this.props.scene.objective.item}
                    >
                        {items}
                    </Control.select>
                </FormGroup>
                <FormGroup>
                    <Label>Property</Label>
                    <Row>
                        <Col md={{ size: 5 }}>
                            <Control.text
                                model=".propertyName"
                                className="form-control"
                                placeholder="Name"
                                onChange={this.handlePropertyNameChange}
                            ></Control.text>
                        </Col>
                        <strong>:</strong>
                        <Col md={{ size: 6 }}>
                            <Control.text
                                model=".propertyValue"
                                className="form-control"
                                placeholder="Value"
                                onChange={this.handlePropertyValueChange}
                            ></Control.text>
                        </Col>
                    </Row>
                </FormGroup>

                <FormGroup>
                    <Label>Description</Label>
                    <Control.text
                        model=".description"
                        className="form-control"
                        placeholder="description of the object"
                        onChange={this.handleDescriptionChange}
                    ></Control.text>
                </FormGroup>
            </div>
        )
    }
}

export default SceneProperty;
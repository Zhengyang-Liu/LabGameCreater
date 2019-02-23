import * as React from 'react';
import { Control } from 'react-redux-form';
import { Col, FormGroup, Label, Row } from 'reactstrap';

import * as Types from '../../../types';

interface Props {
    selectedItem: Types.Item
}

class ContainerPropertyPanel extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    handleLiquidChanged = (event) => {
        this.props.selectedItem.property.liquid = event.target.value;
    }

    render = () => {
        return (
            <FormGroup>
                <Label>Liquid</Label>
                <Control.text
                    model=".propertyName"
                    className="form-control"
                    placeholder="Name"
                    onChange={this.handleLiquidChanged}
                ></Control.text>
            </FormGroup>
        )
    }
}

export default ContainerPropertyPanel;
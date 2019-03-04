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

    handleLiquidTypeChange = (event) => {
        this.props.selectedItem.property.liquidType = event.target.value;
    }

    handleVolumeChange = (event) => {
        this.props.selectedItem.property.volume = event.target.value;
    }

    render = () => {
        return (
            <>
            <FormGroup>
                <Label>Liquid Type</Label>
                <Control.text
                    model="selectedItem.property.liquidType"
                    className="form-control"
                    placeholder="Name"
                    onChange={this.handleLiquidTypeChange}
                ></Control.text>
            </FormGroup>

            <FormGroup>
                <Label>Volume</Label>
                <Control.text
                    model="selectedItem.property.volume"
                    className="form-control"
                    placeholder="volume"
                    onChange={this.handleVolumeChange}
                ></Control.text>
            </FormGroup>
            </>
        )
    }
}

export default ContainerPropertyPanel;
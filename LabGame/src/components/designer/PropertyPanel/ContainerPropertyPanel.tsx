import * as React from 'react';
import { Control } from 'react-redux-form';
import { FormGroup, Label } from 'reactstrap';

import { LiquidList } from '../../../shared/LiquidList';
import * as Types from '../../../types';

interface Props {
    itemProperty: Types.PipetteDataProperty
}

class ContainerPropertyPanel extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    handleLiquidTypeChange = (event) => {
        this.props.itemProperty.liquidType = event.target.value;
    }

    handleVolumeChange = (event) => {
        this.props.itemProperty.volume = parseInt(event.target.value);
    }

    render = () => {
        const LiquidTypes = LiquidList.map(item => {
            return (
                <option>{item}</option>
            );
        })
        return (
            <>
            <FormGroup>
                <Label>Liquid Type</Label>
                <Control.select
                    model="selectedItem.property.liquidType"
                    className="form-control"
                    placeholder="Name"
                    onChange={this.handleLiquidTypeChange}
                >
                 {LiquidTypes}
                </Control.select>
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
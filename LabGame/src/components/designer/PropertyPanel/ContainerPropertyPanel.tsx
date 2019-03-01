import * as React from 'react';
import { Control } from 'react-redux-form';
import { Col, FormGroup, Label, Row } from 'reactstrap';

import * as Types from '../../../types';
import { LiquidList } from './LiquidList';

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
        const liquidList = LiquidList.map(item => {
            return (
                <option>{item}</option>
            );
        })
        return (
            <FormGroup>
                <Label>Liquid</Label>
                <Control.select
                    model=".propertyName"
                    className="form-control"
                    placeholder="Name"
                    onChange={this.handleLiquidChanged}
                >{liquidList}</Control.select>
            </FormGroup>
        )
    }
}

export default ContainerPropertyPanel;
import * as React from 'react';
import { FormGroup, Label } from 'reactstrap';

import * as Types from '../../../types';
import { PropertyComponentDictionary } from './PropertyComponentDictionary';

interface Props {
    itemProperty: Types.PipetteDataProperty
}

class PipettePropertyPanel extends React.Component<Props> {
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
        let liquidTypeComponentProps = {
            onChangeHander: this.handleLiquidTypeChange,
            model: "selectedItem.property.liquidType"
        }
        let liquidTypeComponent = React.createElement(PropertyComponentDictionary["liquidType"].component, liquidTypeComponentProps)

        let volumeComponentProps = {
            onChangeHander: this.handleVolumeChange,
            model: "selectedItem.property.volume"
        }
        let VolumeComponent = React.createElement(PropertyComponentDictionary["volume"].component, volumeComponentProps)

        return (
            <>
                <FormGroup>
                    <Label>Liquid Type</Label>
                    {liquidTypeComponent}
                </FormGroup>

                <FormGroup>
                    <Label>Volume</Label>
                    {VolumeComponent}
                </FormGroup>
            </>
        )
    }
}

export default PipettePropertyPanel;
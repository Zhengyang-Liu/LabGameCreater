import * as React from 'react';
import { connect } from 'react-redux';
import { FormGroup, Label } from 'reactstrap';

import * as Types from '../../../types';
import { PropertyComponentDictionary } from './PropertyComponentDictionary';

interface Props {
    item: Types.Item
    items: Array<Types.Item>
}

class ContainerPropertyPanel extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render = () => {
        let i = 0;
        for (; i < this.props.items.length; i++) {
            if (this.props.items[i].id == this.props.item.id) {
                break;
            }
        }
        let liquidTypeComponentProps = {
            model: "sceneInfo.scene.items[" + i + "].property.liquidType"
        }
        let liquidTypeComponent = React.createElement(PropertyComponentDictionary["liquidType"].component, liquidTypeComponentProps)

        let volumeComponentProps = {
            model: "sceneInfo.scene.items[" + i + "].property.volume"
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

const mapStateToProps = (state) => ({
    items: state.sceneInfo.scene.items
})

export default connect(mapStateToProps)(ContainerPropertyPanel);
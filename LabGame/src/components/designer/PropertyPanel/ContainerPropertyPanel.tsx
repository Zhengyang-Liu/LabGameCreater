import * as React from 'react';
import * as Types from '../../../types';
import LiquidPanelComponent from './sharedPanelComponent/LiquidPanelComponent';

interface Props {
    itemProperty: Types.PipetteDataProperty
}

class ContainerPropertyPanel extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render = () => {
        return (
            <LiquidPanelComponent value={this.props.itemProperty.liquid} />
        )
    }
}

export default ContainerPropertyPanel;
import * as React from 'react';
import * as Types from '../../../types';
import LiquidPanelComponent from './sharedPanelComponent/LiquidPanelComponent';


interface Props {
    itemProperty: Types.PipetteDataProperty
}

class PipettePropertyPanel extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    render = () => {
        return (
            <LiquidPanelComponent liquidList={this.props.itemProperty.liquid} />
        )
    }
}

export default PipettePropertyPanel;
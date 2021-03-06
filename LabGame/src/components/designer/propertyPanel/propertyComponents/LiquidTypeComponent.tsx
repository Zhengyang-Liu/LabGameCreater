import * as React from 'react';
import { Control } from 'react-redux-form';

import { LiquidList } from '../../../../shared/LiquidList';

interface Props {
    model: string
}

class LiquidType extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render = () => {
        const LiquidTypes = LiquidList.map(item => {
            return (
                <option>{item}</option>
            );
        })
        return (<Control.select
            model={this.props.model}
            className="form-control"
            placeholder="Liquid Type"
        >
            {LiquidTypes}
        </Control.select>)

    }
}

export default LiquidType;
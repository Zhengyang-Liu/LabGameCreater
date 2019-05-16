import * as React from 'react';
import { actions, Control } from 'react-redux-form';

interface Props {
    model: string,
}

class Volume extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    toInt = (value) => {
        return parseInt(value) || 0;
    }

    render = () => {
        return (
            <Control.text
                model={this.props.model}
                type="number"
                className="form-control"
                placeholder="Volume"
                parser={this.toInt}
            />
        )
    }
}

export default Volume;
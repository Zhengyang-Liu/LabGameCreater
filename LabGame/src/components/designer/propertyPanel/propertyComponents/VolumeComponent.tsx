import * as React from 'react';
import { Control } from 'react-redux-form';

interface Props {
    onChangeHander: any,
    model: string,
}

class Volume extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render = () => {
        return (
            <Control.text
                model= {this.props.model}
                className="form-control"
                placeholder="Volume"
                onChange={this.props.onChangeHander}
            />
        )
    }
}

export default Volume;
import * as React from 'react';
import { Control } from 'react-redux-form';
import { Col, FormGroup, Label, Row } from 'reactstrap';

import * as Types from '../../../types';

interface Props {
    element: Types.Item
}

class PipetteProperty extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render = () => {
        return (
            <FormGroup>
                <Label>Property</Label>
                <Control.text
                    model=".propertyName"
                    className="form-control"
                    placeholder="Name"
                ></Control.text>
            </FormGroup>
        )
    }
}

export default PipetteProperty;
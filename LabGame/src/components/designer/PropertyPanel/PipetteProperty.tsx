import * as React from 'react';
import { FormGroup, Label, Row, Col } from 'reactstrap';
import { Control } from 'react-redux-form';
import * as types from '../../../types';

interface Props{
    element: types.Item
}

class PipetteProperty extends React.Component<Props> {
    constructor(props: any) {
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
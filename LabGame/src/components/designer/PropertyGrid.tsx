import * as React from 'react';
import { LocalForm } from 'react-redux-form';
import { FormGroup, Button } from 'reactstrap';

class PropertyGrid extends React.Component {
    render() {
        return (
            <FormGroup>
                <Button type="button" className="btn btn-default" >
                    Remove
                    </Button>
            </FormGroup>
        )
    }
}

export default PropertyGrid;
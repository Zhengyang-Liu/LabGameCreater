import * as React from 'react';
import { FormGroup, Button } from 'reactstrap';
import { removeItem } from '../../redux/ActionCreators'
import { connect } from 'react-redux';

class PropertyGrid extends React.Component<any, any> {

    handleClick() {
        this.props.removeItem(this.props.selecteditem);
    }

    render() {
        return (
            <FormGroup>
                <Button onClick={() => this.handleClick()} type="button" className="btn btn-default" >
                    Remove
                    </Button>
            </FormGroup>
        )
    }
}

const mapStateToProps = state => ({
    selecteditem: state.selectedItem
})

const mapDispatchToProps = (dispatch) => ({
    removeItem: (itemId: number) => dispatch(removeItem(itemId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PropertyGrid);
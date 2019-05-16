import * as React from 'react';
import { connect } from 'react-redux';
import { Control } from 'react-redux-form';
import { Button, FormGroup, Label } from 'reactstrap';

import { removeItem } from '../../../redux/ActionCreators';
import * as Types from '../../../types';
import { ItemPropertyPanelDictionary } from './ItemPropertyPanelDictionary';

interface Props {
    removeItem: Function,
    selectedItem: Types.Item,
}

class ItemPropertyPanel extends React.Component<Props> {
    constructor(props) {
        super(props);
    }

    handleNameChange = (event) => {
        this.props.selectedItem.name = event.target.value;
    }

    handleRemoveItem = () => {
        this.props.removeItem(this.props.selectedItem.id);
    }

    renderNamePanel = () => {
        let namePanel =
            <FormGroup>
                <Label>Item Name</Label>
                <Control.text
                    model="selectedItem.name"
                    className="form-control"
                    placeholder="Name"
                    onChange={this.handleNameChange}
                ></Control.text>
            </FormGroup>
        return namePanel;
    }

    renderRemoveButton = () => {
        let removeButton =
            <FormGroup>
                <Button
                    onClick={() => this.handleRemoveItem()} type="button" className="btn btn-default" >
                    Remove
            </Button>
            </FormGroup>
        return removeButton;
    }

    renderPropertyPanel = () => {
        let itemPanelProps = {
            item: this.props.selectedItem
        }
        let itemPropertyPanel = React.createElement(ItemPropertyPanelDictionary[this.props.selectedItem.type], itemPanelProps);
        return itemPropertyPanel;
    }

    render = () => {
        if (this.props.selectedItem != null) {

            return (
                <div>
                    {this.renderNamePanel()}
                    {this.renderPropertyPanel()}
                    {this.renderRemoveButton()}
                </div>
            );
        }
        else {
            return null;
        }
    }
}

const mapStateToProps = (state) => ({
    selectedItem: state.selectedItem
})

const mapDispatchToProps = (dispatch) => ({
    removeItem: (itemId: number) => dispatch(removeItem(itemId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemPropertyPanel);
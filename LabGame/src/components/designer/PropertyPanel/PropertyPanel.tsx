import classnames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';
import { Control } from 'react-redux-form';
import {
    Button, Col, FormGroup, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane
} from 'reactstrap';

import { removeItem } from '../../../redux/ActionCreators';
import * as Types from '../../../types';
import { ItemPropertyPanelDictionary } from './ItemPropertyDictionary';
import SceneProperty from './ScenePropertyPanel';

interface Props {
    scene: Types.Scene,
    selectedItem: Types.Item,
    removeItem: Function
}

interface State {
    activeTab: string,
}

class PropertyPanel extends React.Component<Props, State>{
    constructor(props) {
        super(props);

        this.state = {
            activeTab: '1',
        };
    }

    handleClick = () => {
        this.props.removeItem(this.props.selectedItem.id);
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    renderItemPropertyPanel = (item) => {
        if (item != null) {
            let namePanel =
                <FormGroup>
                    <Label>Item Name</Label>
                    <Control.text
                        model=".propertyName"
                        className="form-control"
                        placeholder="Name"
                    ></Control.text>
                </FormGroup>
            let removeButton =
                <FormGroup>
                    <Button
                        onClick={() => this.handleClick()} type="button" className="btn btn-default" >
                        Remove
                    </Button>
                </FormGroup>

            let props = {
                item: item
            }
            let itemPropertyPanel = React.createElement(ItemPropertyPanelDictionary[item.type], props);
            return <div>{namePanel}{itemPropertyPanel}{removeButton}</div>;
        }
        else {
            return null;
        }
    }

    render = () => {
        return (
            <div>
                <Row>
                    <Nav className="nav-tabs">
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                                <span className="fa fa-cube fa-lg"></span> Item
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                <span className="fa fa-file fa-lg"></span> Scene
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Row>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <FormGroup>
                            {this.renderItemPropertyPanel(this.props.selectedItem)}
                        </FormGroup>
                    </TabPane>
                    <TabPane tabId="2">
                        <SceneProperty scene={this.props.scene}></SceneProperty>
                    </TabPane>

                </TabContent>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    selectedItem: state.selectedItem,
    scene: state.scene
})

const mapDispatchToProps = (dispatch) => ({
    removeItem: (itemId: number) => dispatch(removeItem(itemId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PropertyPanel);
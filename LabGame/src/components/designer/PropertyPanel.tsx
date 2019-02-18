import * as React from 'react';
import { FormGroup, TabContent, TabPane, Nav, NavItem, NavLink, Button, Label, Row, Col } from 'reactstrap';
import { removeItem } from '../../redux/ActionCreators'
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Control, LocalForm, Errors } from 'react-redux-form';
import * as types from '../../types';

interface Props {
    scene: types.Scene,
    selectedItem: number,
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
        this.props.removeItem(this.props.selectedItem);
    }

    handleItemChange = (event) => {
        this.props.scene.objective.item = event.target.value;
    }

    handleDescriptionChange = (event) => {
        this.props.scene.objective.description = event.target.value;
    }

    handlePropertyNameChange = (event) => {
        this.props.scene.objective.property.name = event.target.value;
    }

    handlePropertyValueChange = (event) => {
        this.props.scene.objective.property.value = event.target.value;
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render = () => {
        const items = this.props.scene.items.map(item => {
            return (
                <option>{item.name}</option>
            );
        })
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
                            <Button
                                onClick={() => this.handleClick()} type="button" className="btn btn-default" >
                                Remove
                            </Button>
                        </FormGroup>
                    </TabPane>

                    <TabPane tabId="2">
                        <h4>Objective Setttings</h4>
                        <FormGroup>
                            <Label>Item</Label>
                            <Control.select
                                model=".item"
                                className="form-control"
                                onChange={this.handleItemChange}
                                defaultValue={this.props.scene.objective.item}
                            >
                                {items}
                            </Control.select>
                        </FormGroup>
                        <FormGroup>
                            <Label>Property</Label>
                            <Row>
                                <Col md={{ size: 5 }}>
                                    <Control.text
                                        model=".propertyName"
                                        className="form-control"
                                        placeholder="Name"
                                        onChange={this.handlePropertyNameChange}
                                    ></Control.text>
                                </Col>
                                <strong>:</strong>
                                <Col md={{ size: 6 }}>
                                    <Control.text
                                        model=".propertyValue"
                                        className="form-control"
                                        placeholder="Value"
                                        onChange={this.handlePropertyValueChange}
                                    ></Control.text>
                                </Col>
                            </Row>
                        </FormGroup>

                        <FormGroup>
                            <Label>Description</Label>
                            <Control.text
                                model=".description"
                                className="form-control"
                                placeholder="description of the object"
                                onChange={this.handleDescriptionChange}
                            ></Control.text>
                        </FormGroup>
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
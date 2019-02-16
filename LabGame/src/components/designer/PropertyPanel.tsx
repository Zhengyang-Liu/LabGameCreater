import * as React from 'react';
import { FormGroup, TabContent, TabPane, Nav, NavItem, NavLink, Button, Label, Row, Col } from 'reactstrap';
import { removeItem } from '../../redux/ActionCreators'
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Control, LocalForm, Errors } from 'react-redux-form';

class PropertyPanel extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    handleClick() {
        this.props.removeItem(this.props.selecteditem);
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
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
                        <Label>Object</Label>

                        <FormGroup>
                            <Label>Item</Label>
                            <Control.select
                                model=".item"
                                className="form-control"
                            ></Control.select>
                        </FormGroup>
                        <FormGroup className="FormGroup">
                            <Label>Property</Label>
                            <Row>
                                <Col md={{ size: 5 }}>
                                    <Control.text
                                        model=".propertyName"
                                        className="form-control"
                                        placeholder="Name"
                                    ></Control.text>
                                </Col>
                                <strong>:</strong>
                                <Col md={{ size: 6 }}>
                                    <Control.text
                                        model=".propertyContent"
                                        className="form-control"
                                        placeholder="Content"
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
                            ></Control.text>
                        </FormGroup>
                    </TabPane>
                </TabContent>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    selecteditem: state.selectedItem
})

const mapDispatchToProps = (dispatch) => ({
    removeItem: (itemId: number) => dispatch(removeItem(itemId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PropertyPanel);
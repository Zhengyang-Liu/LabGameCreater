import classnames from 'classnames';
import * as React from 'react';
import { FormGroup, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import Col from 'reactstrap/lib/Col';

import * as Types from '../../../types';
import { Loading } from '../../LoadingComponent';
import ItemPropertyPanel from './ItemPropertyPanel';
import ScenePropertyPanel from './ScenePropertyPanel';

interface State {
    activeTab: string,
}

interface Props {
    scene: Types.Scene,
    loadingScene: boolean
}

class PropertyPanel extends React.Component<Props, State>{
    constructor(props) {
        super(props);

        this.state = {
            activeTab: '1',
        };
    }


    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render = () => {
        if (this.props.loadingScene) {
            return (
                <Loading />
            );
        } else {
            return (
                <div>
                    <Row>
                        <Col>
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
                        </Col>
                    </Row>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1" style={{ padding: "5px" }}>
                            <FormGroup>
                                <ItemPropertyPanel />
                            </FormGroup>
                        </TabPane>
                        <TabPane tabId="2" style={{ padding: "5px" }}>
                            <ScenePropertyPanel/>
                        </TabPane>
                    </TabContent>
                </div>
            )
        }
    }
}

export default PropertyPanel;
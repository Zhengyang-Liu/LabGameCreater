import * as React from 'react';
import Header from './Header';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { addItem } from '../redux/ActionCreators'
import { connect } from 'react-redux';
import Playground from './Playground';
import Designer from './designerPage/Designer'

interface mainState {
    scene: any;
    tools: any;
}

const mapStateToProps = (state: mainState) => {
    return {
        scene: state.scene,
        tools: state.tools
    }
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (type) => dispatch(addItem(type))
})

interface Props {
    scene: []
    tools: []
}

class Main extends React.Component<Props>{

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/playground" component={Playground} />
                    <Route path="/designer" component={() => <Designer scene={this.props.scene} tools={this.props.tools}/>} />
                    <Route exact path="/contactus" />} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect<mainState, any, any>(mapStateToProps, mapDispatchToProps)(Main))
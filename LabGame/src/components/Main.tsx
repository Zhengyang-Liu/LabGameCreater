import * as React from 'react';
import Header from './Header';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Playground from './Playground';
import Designer from './designerPage/Designer'

interface mainState {
    scene: any;
}

const mapStateToProps = (state: mainState) => {
    return {
        scene: state.scene
    }
}

interface Props {
    scene: []
    sceneSetting: {
        x: number,
        y: number,
        width: number,
        height: number,
        angle: number,
    }
}

class Main extends React.Component<Props>{

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/playground" component={Playground} />
                    <Route path="/designer" component={() => <Designer scene={this.props.scene} />} />
                    <Route exact path="/contactus" />} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect<mainState, any, any>(mapStateToProps)(Main))
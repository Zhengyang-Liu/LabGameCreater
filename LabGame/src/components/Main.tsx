import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import { addItem } from '../redux/ActionCreators';
import Designer from './designer/Designer';
import Header from './Header';
import Playground from './playground/Playground';

class Main extends React.Component{

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/playground" component={Playground} />
                    <Route path="/designer" component={Designer} />
                    <Route exact path="/contactus" />} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Main)
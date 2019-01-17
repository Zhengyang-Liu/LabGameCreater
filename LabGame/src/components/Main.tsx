import * as React from 'react';
import Header from './Header';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Playground from './Playground';
import Designer from './Designer/Designer'

class Main extends React.Component {
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

export default Main;
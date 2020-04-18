import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';

export default class AppRoute extends React.Component {
    public render() {
        return (
            <div>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Redirect to="/home"/>
                </Switch>
            </div>
        );
    }
}
import * as React from "react";
import { hot } from "react-hot-loader";

const reactLogo = require("./../assets/img/react_logo.svg");
import "../assets/scss/App.scss";

class App extends React.Component<{}, undefined> {
    public render() {
        return (
            <div className="app">
                <h1>Quicksi loves react with typescript</h1>
                <p>Say hi to quicksi</p>
            </div>
        );
    }
}

declare let module: object;

export default hot(module)(App);

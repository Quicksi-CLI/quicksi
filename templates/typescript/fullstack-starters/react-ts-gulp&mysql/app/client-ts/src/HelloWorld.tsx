import {APIResponse} from "deadlockjs";
import * as React from "react";
import {App} from "../../shared/App";
import * as css from "../css/main.css";
import * as logo from "../images/image.png";

export interface IProps {

    what: string;
}

export class HelloWorld extends React.Component<IProps, any> {

    private iconStyle: any;

    constructor(props: IProps) {
        super(props);

        this.state = {
            message: "ko",
        };

        this.iconStyle = {"max-height": "20px"};
    }

    public componentDidMount() {
        return fetch("http://" + App.HOST + ":" + App.PORT + App.API_PATH)
            .then((response) => response.json())
            .then((json: APIResponse) =>
                this.setState({ message: json.data }),
            )
            .catch((error) => this.setState({ message: "API ERR" }));
    }

    public render() {
        return (
            <div style={css}>
                <h1>Quicksi Tests:</h1>
                <ul>
                    <li>test 1: {this.props.what}</li>
                    <li>test 2: {this.state.message}</li>
                    <li>test 3: <img style={this.iconStyle} src={logo}/></li>
                    <li>test 4: <span className={"task-success"}>ok</span></li>
                </ul>
            </div>
        );
    }
}

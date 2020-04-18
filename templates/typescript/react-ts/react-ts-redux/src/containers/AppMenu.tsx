import * as React from 'react';
import { Menu } from 'antd';
import { SelectParam } from 'antd/lib/menu';
import { withRouter, RouteComponentProps } from 'react-router';

class AppMenu extends React.Component<RouteComponentProps> {
    private onSelect = ({ key }: SelectParam) => {
        const { history } = this.props;

        history.push(key);
    }

    public render() {
        const { location } = this.props;

        return (
            <Menu
                mode="horizontal"
                style={{ lineHeight: '64px' }}
                selectedKeys={[location.pathname]}
                onSelect={this.onSelect}
            >
                <Menu.Item key="/home">Home</Menu.Item>
                <Menu.Item key="/about">About</Menu.Item>
            </Menu>
        );
    }
}

export default withRouter(AppMenu);
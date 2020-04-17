import * as React from 'react';
import { Layout } from 'antd';
import './App.css';
import AppMenu from './containers/AppMenu';
import AppRoute from './containers/AppRoute';

const { Header, Content, Footer } = Layout;

class App extends React.Component {
  public render() {
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: 'none' }}>
          <h2 className="App-logo">Logo here</h2>
          <AppMenu/>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            <AppRoute/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Footer ©2018
    </Footer>
      </Layout>
    );
  }
}

export default App;

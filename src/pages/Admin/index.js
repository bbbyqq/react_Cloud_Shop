import React, { Component } from 'react'
import { HashRouter, Link, Route, Switch, Redirect } from 'react-router-dom'
import Overview from '../../components/Overview'
import Other from '../../components/Other'
import OrderManagement from '../../components/OrderManagement'
import StoreManagement from '../../components/StoreManagement/StoreManagement'
import PickManagement from '../../components/StoreManagement/PickManagement'
import './index.css'
import { Layout, Menu,message } from 'antd';
import {
  ShopOutlined,
  TableOutlined,
  HomeOutlined,
  ReloadOutlined,
  BarsOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default class Admin extends Component {
  state = {
    collapsed: false,
    current: '1'
  };

  handleClick = (e) => {
    // document.getElementById('menu').setAttribute("defaultSelectedKeys","1")
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  handleExit = () =>{
    message.error('暂未开发完成')
  }

  render() {
    return (
      <div>
        <HashRouter>
          <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <div className="logo">后台管理中心</div>
              <Menu id="menu" theme="dark" mode="inline" onClick={this.handleClick} selectedKeys={[this.state.current]}>
                <Menu.Item key="1" icon={<HomeOutlined />}>
                  <Link to="/overview">总览</Link>
                </Menu.Item>
                <SubMenu key="2" icon={<ShopOutlined />} title="店铺管理">
                  <Menu.Item key="3" icon={<ShopOutlined />}>
                    <Link to="/storeManagement/storeManagement">店铺管理</Link>
                  </Menu.Item>
                  <Menu.Item key="4" icon={<TableOutlined />}>
                    <Link to="/storeManagement/pickManagement">自提点管理</Link>
                  </Menu.Item>
                </SubMenu>
                <Menu.Item key="5" icon={<BarsOutlined />}>
                  <Link to="/orderManagement">订单管理</Link>
                </Menu.Item>
                <Menu.Item key="6" icon={<ReloadOutlined />}>
                  <Link to="/other">其他</Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0, background: '#001627' }}>
                <div className="exit" onClick={this.handleExit}>退出</div>
              </Header>
              <Content
                className="site-layout-background"
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                }}
              >
                <Switch>
                  <Route path="/overview" component={Overview}></Route>
                  <Route path="/storeManagement/storeManagement" component={StoreManagement}></Route>
                  <Route path="/storeManagement/pickManagement" component={PickManagement}></Route>
                  <Route path="/orderManagement" component={OrderManagement}></Route>
                  <Route path="/other" component={Other}></Route>
                  {/* 默认跳转overview界面 */}
                  <Redirect to="/overview" />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </HashRouter>
      </div>
    )
  }
}

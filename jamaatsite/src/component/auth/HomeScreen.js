import React from 'react'
import 'antd/es/drawer/style/css';
import { Drawer, Button, Radio } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { Input } from 'antd';
const { Header, Content, Footer } = Layout;


const { Search } = Input;
const drawerstyle = {
    backgroundColor:'rgba(0,0,0,10)',
  };


export default class HomeScreen extends React.Component{
    state = { visible: false,placement:'right'  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };


    render(){
        return(
            
            <Layout className="layout">
            <Header>
            
            
             
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
              >
                  <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 200}}
                />
                <Menu.Item key="1" onClick={this.showDrawer}>menu</Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
            
            <Drawer 
              
              title="Home"
              placement={this.state.placement}
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <div ><Carousel autoplay>
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
  </Carousel></div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>RingeTehran Desinged by MelliTeam</Footer>
          </Layout>
          
        )
    }
}
import React from 'react'
import 'antd/es/drawer/style/css';
import { Drawer, Button, Radio } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { Input } from 'antd';
import ghaltak from './ghaltak.jpg' 
import ring from './ring.jpg' 
import pic from './pic.png'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
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
            <div>

            
              <div className='headnav'>
            
            
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px', display:'flex',}}

              >
                  <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 200,height:25}}
                />
                <Menu.Item key="1" onClick={this.showDrawer} style={{alignSelf:'flex-end',marginLeft:'5px'}} >menu</Menu.Item>
              </Menu>

            
            </div>
            <div>
            
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
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>About Us</p>              
            </Drawer>
            </div>
              <div>
              <Slider>
 
            <h2>baby</h2>
            <div>hey</div>
  
</Slider>
                
    
            {/* <Carousel autoplay                            >
            <div className='pic1'>
              
              
            </div>
            <div>
              
            </div>
            <div>
              
            </div>
            <div>
              
            </div>
  </Carousel> */}
  </div>
            
            <div>
            <Footer style={{ textAlign: 'center' }}>RingeTehran Desinged by MelliTeam</Footer>
            </div>
          </div>
        )
    }
}
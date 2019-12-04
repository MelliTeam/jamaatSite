import React from 'react';
import { Drawer, Button, Radio } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

export default class Header2 extends React.Component {
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
    <header>
      <section>
        <h2>RingeGhaltak</h2>
        <div className='menubut'><button onClick={this.showDrawer}>menu</button></div>

        <a href="https://github.com/erichbehrens/react-animated-slider" target="_blank">
          
        </a>
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
      </section>
    </header>
  )
}

}
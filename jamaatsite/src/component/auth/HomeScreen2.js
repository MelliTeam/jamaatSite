import React from 'react';
import ring from './ring.jpg' 
import pic from './pic.png'
import Header2 from './Header2';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider.animation.css';
import './styles.css';
import { Drawer, Button, Radio } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

const content = [
	{
		title: '',
		description:
		'',
		button: 'Read More',
		image: require('./ring.jpg'),
		user: '',
		userProfile: ''
	},
	{
		title: '',
		description:
		'',
		button: 'Discover',
		image: require('./ring.jpg'),
		user: '',
		userProfile: ''
	},
	{
		title: '',
		description:
		'',
		button: 'Buy now',
		image: require('./ring.jpg'),
		user: '',
		userProfile: ''
	}
];

export default class HomeScreen2 extends React.Component{
    
render(){
    return(

	<div>
			<Header2 />
		<div className="wrapper">
			
			
		</div>
        <div>

            </div>
		<Slider className="slider-wrapper" autoplay='2000'>
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background:`url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						{/* <button>{item.button}</button> */}
					</div>
					{/* <section>
						<img src={item.userProfile} alt={item.user} />
						<span>
							Posted by <strong>{item.user}</strong>
						</span>
					</section> */}
				</div>
			))}
		</Slider>
        <Footer style={{ textAlign: 'center' }}>RingeTehran Desinged by MelliTeam</Footer>
	</div>

    )
            }   
        }
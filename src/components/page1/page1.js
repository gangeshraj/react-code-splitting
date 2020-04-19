import React from 'react';
import './page1.css';
import logo from '../../logo.svg';
// import { ThemeConsumer } from 'styled-components'


{/* <img src={'https://a.staticaa.com/images/web-apps/component/hero-banner/flight-bg.jpg'} /> */}
const Background='https://a.staticaa.com/images/web-apps/component/hero-banner/flight-bg.jpg'
const Page1=({onRouteChange})=>{
    return(
    <div className="page1-App" 
        style={{backgroundImage: `url(${Background})`,
               height:500,width:'calc(100% - 60px)',
               backgroundSize:'cover',
               boxSizing:'border-box'}}>
    {/* <img src={logo} className="page1-App-logo" alt="logo"/> */}
    <h1 className="page1-App-title">I AM H1</h1>
    <div className={"page1-bw"}>
    {/* <ThemeConsumer>
    </ThemeConsumer> */}
    <button disabled>Page 1</button>
    <button onClick={()=>onRouteChange('page2')}>Page 2</button>
    <button onClick={()=>onRouteChange('page3')}>Page 3</button>
    </div>
    </div>
    );
}

export default Page1;
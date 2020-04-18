import React from 'react';
import './page1.css';
import logo from '../../logo.svg';

const Page1=({onRouteChange})=>{
    return(
    <div className="page1-App">
    <img src={'https://a.staticaa.com/images/web-apps/component/hero-banner/flight-bg.jp'} />
    <header className="page1-App-header">
    <img src={logo} className="page1-App-logo" alt="logo"/>
    <h1 className="page1-App-title">I am HOMEPAGE REVAMP</h1>
    </header>
    <div className={"page1-bw"}>
    <button className='disabled'>Page 1</button>
    <button onClick={()=>onRouteChange('page2')}>Page 2</button>
    <button onClick={()=>onRouteChange('page3')}>Page 3</button>
    </div>
    </div>
    );
}

export default Page1;
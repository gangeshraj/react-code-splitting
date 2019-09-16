import React from 'react';
import logo from '../logo.svg';

const Page1=({onRouteChange})=>{
    return(
    <div className="App">
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo"/>
    <h1 className="App-title">Welcome to Page1</h1>
    </header>
    <div className={"bw"}>
    <button className='disabled'>Page 1</button>
    <button onClick={()=>onRouteChange('page2')}>Page 2</button>
    <button onClick={()=>onRouteChange('page3')}>Page 3</button>
    </div>
    </div>
    );
}

export default Page1;
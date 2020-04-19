import React from 'react';
import logo from '../../logo.svg';
import './page2.css';

const Page2=({onRouteChange})=>{
return(<div className="App">
<header className="App-header">
<img src={logo} className="App-logo" alt="logo"/>
<h1 className="App-title">PAGE 2</h1>
</header>
<div className={"bw"}>
<button onClick={()=>onRouteChange('page1')}>Page 1</button>
<button className='disabled'>Page 2</button>
<button onClick={()=>onRouteChange('page3')}>Page 3</button>
</div>
</div>
)
}
    
export default Page2;
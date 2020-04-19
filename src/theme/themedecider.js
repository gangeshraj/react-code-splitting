import React,{Component} from 'react';
import { onSizeChange } from '../helper/helper.js';
// import ThemeProviderDesktop from './themeDesktop/themeDesktop';
// import ThemeProviderTablet from './themeTablet/themeTablet';
// import ThemeProviderMobile from './themeMobile/themeMobile';

class ThemeProviderComponent extends Component {

    state={
        route:''
    }


  onScrollChange(){
    console.log("a is");
  }

  onSizeChange(){
      console.log("reaching");
    if(window.innerWidth<=695)
    {
        import('./themeMobile/themeMobile').then((ThemeProviderMobile)=>{
            this.setState({route:'ThemeProviderMobile',component:ThemeProviderMobile.default})
        })
    }
    else if(window.innerWidth>=696 && window.innerWidth<=1024){
        import('./themeTablet/themeTablet').then((ThemeProviderTablet)=>{
            this.setState({route:'ThemeProviderTablet',component:ThemeProviderTablet.default})
        })
    }
    else{
        import('./themeDesktop/themeDesktop').then((ThemeProviderDesktop)=>{
            this.setState({route:'ThemeProviderDesktop',component:ThemeProviderDesktop.default})
        })
    }
  }

  componentDidMount(){
    // window.addEventListener('scroll',onScrollChange(this.onScrollChange,200));
    this.onSizeChange();
    window.addEventListener('resize',onSizeChange(()=>this.onSizeChange(),200));
  }

  render(){
    if(this.state.route==='')
    return <></>;
    else
    return <this.state.component >{this.props.children}</this.state.component>;
    }
}

export default ThemeProviderComponent;

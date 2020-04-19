import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme={
  buttonTheme:{
    background: 'blue',
    borderRadius: 3,
    border: 'none',
    color: 'white'
  },
  themeh1:{
    backgroundColor:'creme',
    color:'skyblue',
    borderRadius:4
  }
};


const ThemeProviderTablet =(props)=>{
  console.log("theme tablet");
  return <div style={{height:1000,width:'100%',backgroundColor:'yellow'}}><ThemeProvider theme={theme}>{props.children}</ThemeProvider></div>;
}

export default ThemeProviderTablet;

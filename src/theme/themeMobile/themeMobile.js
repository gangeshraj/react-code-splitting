import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme={
  buttonTheme:{
    background: 'green',
    borderRadius: 3,
    border: 'none',
    color: 'white'
  },
  themeh1:{
    backgroundColor:'grey',
    color:'skyblue',
    borderRadius:4
  }
};


const ThemeProviderMobile =(props)=>{
  console.log("theme mobile");
  return <div style={{height:1000,width:'100%',backgroundColor:'green'}}><ThemeProvider theme={theme}>{props.children}</ThemeProvider></div>;
}

export default ThemeProviderMobile;

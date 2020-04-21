import React from 'react';
import styled,{ ThemeProvider } from 'styled-components';
const theme={
  buttonTheme:{
    background: 'red',
    borderRadius: 3,
    border: 'none',
    color: 'white',
    'height':50,
    'width':200
  },
  themeh1:{
    backgroundColor:'blue',
    color:'skyblue',
    borderRadius:4
  },
  h1:{
    background: 'green',
    border: 'none',
    color: 'white',
    color: 'red',
    border: '2px solid red',
    fontSize:100
  },
  Button:{
    backgroundColor: 'red',
    borderRadius: 3,
    color: 'green',
    height:50,
    width:200
  }  
};

const ThemeProviderDesktop =(props)=>{

  return <div style={{height:1000,width:'100%',backgroundColor:'red',padding:25}}><ThemeProvider theme={theme}>{props.children}</ThemeProvider></div>;
}

export default ThemeProviderDesktop;

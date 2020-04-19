import React from 'react';
import styled,{ ThemeProvider } from 'styled-components';

const Button = styled.button`
  background: 'red',
  borderRadius: 3,
  border: 'none',
  color: 'white',
  color: ${props => props.theme.main.color};
  border: 2px solid red;
`;

const H1=styled.h1`
    background: 'green',
    border: 'none',
    color: 'white',
    color: ${props => props.theme.main.color};
    border: 2px solid red;
    fontSize:100
`;

const theme={
  buttonTheme:{
    background: 'red',
    borderRadius: 3,
    border: 'none',
    color: 'white'
  },
  themeh1:{
    backgroundColor:'blue',
    color:'skyblue',
    borderRadius:4
  },
  'Button':Button
};


const ThemeProviderDesktop =(props)=>{

  return <div style={{height:1000,width:'100%',backgroundColor:'red',padding:25}}><ThemeProvider theme={theme}>{props.children}</ThemeProvider></div>;
}

export default ThemeProviderDesktop;

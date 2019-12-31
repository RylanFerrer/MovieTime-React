import React from 'react';
import {BounceLoader} from 'react-spinners'
const LoadingScreen = () => {
    const override = `
    display: block;
    height: 100vh;
    margin: 25% auto;
    border-color: red;
  `;
    return (
            <BounceLoader  css = {override}/>
    );
}

export default LoadingScreen;

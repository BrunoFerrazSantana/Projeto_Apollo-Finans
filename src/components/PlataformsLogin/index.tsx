import React from 'react';

import {Container} from './styles';
import LogoAndroid from '../../assets/android.svg';
import LogoIos from '../../assets/ios.svg';
import LogoChrome from '../../assets/chrome.svg';
import LogoFireFox from '../../assets/firefox.svg';

const PlataformsLogin: React.FC = () => (
    <Container>
        <h2>Disponível em:</h2>
        <img src = {LogoAndroid}/>
        <img src = {LogoIos}/>
        <img src = {LogoChrome}/>
        <img src = {LogoFireFox}/>
        
    </Container>
    );

export default PlataformsLogin;
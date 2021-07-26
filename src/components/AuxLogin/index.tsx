import React from 'react';

import {Container} from './styles';
import { Logo } from './styles';
import logoImg from '../../assets/logo.svg';

const AuxLogin: React.FC = () => (
    <Container>
        <Logo>
            <img src = {logoImg} alt = "Apollo Finans"/>
        </Logo>

        <h1>
            Bem-vindo a <span>Apollo Finans</span><br />
        </h1>

        <p>
            Administre sua vida financeira agora mesmo!
        </p>
        
        <span>O que oferecemos:<br /><br /></span>
        <span>- Gráficos dinâmicos.<br /></span>
        <span>- Interface moderna.<br /></span>
        <span>- Aplicação totalmente grátis.<br /></span>  
        <span>- Saldo atualizado instantaneamente.<br /></span>    
        <span>- LGPD.<br /></span>
    </Container>
    );

export default AuxLogin;
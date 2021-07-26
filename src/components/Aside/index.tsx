import React from 'react';

import logoImg from '../../assets/logo.svg';

import { useAuth } from '../hooks/auth';

import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md';

import{
    Container, 
    Header, 
    LogImg,
    Title,
    MenuContainer,
    MenuItemLink,
    MenuItemButton
} from './styles';

const Aside: React.FC = () =>{

    const {sigOut} = useAuth();

    return(
        <Container>
            <Header>
                <a href = "/dashboard">
                    <LogImg src = {logoImg} alt = "Logotipo Apollo Finans" />
                </a>
                <a href = "/dashboard">Apollo Finans</a>
            </Header>

            <MenuContainer>
                <MenuItemLink href = "/">
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>
                
                <MenuItemLink href = "/list/entry-balance">
                    <MdArrowUpward />
                    Entradas
                </MenuItemLink>

                <MenuItemLink href = "/list/exit-balance">
                    <MdArrowDownward />
                    Saídas
                </MenuItemLink>

                <MenuItemButton onClick = {sigOut}>
                    <MdExitToApp />
                    Sair
                </MenuItemButton>
            </MenuContainer>
        </Container>
    );
}

export default Aside;
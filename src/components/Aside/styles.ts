import styled from 'styled-components';

export const Container = styled.div`
    grid-area: AS;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.black};
    border-right: 1px solid ${props => props.theme.colors.black};
`;

export const Header = styled.header`
    display: flex;
    margin-bottom: 30px;

    > a{
        color: ${props => props.theme.colors.black};
        text-decoration: none;
        margin-top: 21px;
        font-size: 1.4em;

    }

    a:hover{
        color: #00FA9A;
    }
`;

export const Title = styled.h3`
    
`;

export const LogImg = styled.img`
    width: 100px;
    height: 100px;
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
`;

export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.black};
    text-decoration: none;
    margin: 10px 20px;
    display: flex;
    align-items: center;
    font-size: 1.2em;

    &:hover{
        color: ${props => props.theme.colors.secondary};
    }

    > svg{
        margin-right: 8px;
    }
`;

export const MenuItemButton = styled.button`
    font-size: 16px;
    color: ${props => props.theme.colors.black};
    border: none;
    background: none;
    margin: 10px 20px;
    display: flex;
    align-items: center;
    font-size: 1.2em;

    &:hover{
        color: ${props => props.theme.colors.secondary};
    }

    > svg{
        margin-right: 8px;
    }
`;
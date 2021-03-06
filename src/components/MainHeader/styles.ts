import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MH;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    border-bottom: 1px solid ${props => props.theme.colors.black};
`;

export const Profile = styled.div`
    color: ${props => props.theme.colors.black};
`;

export const Welcome = styled.h3`

`;

export const UserName = styled.span`

`;
import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CT;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.black};

    padding: 20px;
    height: calc(100vh - 70px);
    overflow-y: scroll;

    ::-webkit-scrollbar{
        width: 10px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: #808080;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track{
        background-color: #fff;
    }
`;
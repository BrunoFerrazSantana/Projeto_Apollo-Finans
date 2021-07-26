import styled from "styled-components";

export const Container = styled.div`

    > select{
        padding: 7px 10px;
        border-radius: 20px;
        margin-left: 10px;
        background-color: ${props => props.theme.colors.gray};
        color: ${props => props.theme.colors.tertiary};
    }
`;
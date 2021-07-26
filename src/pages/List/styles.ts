import styled from "styled-components";

export const Container = styled.div`

`;

export const Content = styled.main`

`;

export const Filters = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;

    .tag-filter{
        font-size: 18px;
        font-weight: 500;
        background: none;
        color: ${props => props.theme.colors.black};
        margin: 0px 10px;
        opacity: .4;
        }
    
    .tag-filter-recurrent::after{
        content: '';
        display: block;
        width: 30px;
        margin: 0 auto;
        border-bottom: 10px solid #A020F0;
    }
    .tag-filter-eventual::after{
        content: '';
        display: block;
        width: 30px;
        margin: 0 auto;
        border-bottom: 10px solid #FF4500;
    }
    .tag-actived{
        opacity: 1;
        }
`;
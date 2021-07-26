import styled, {keyframes} from "styled-components";

interface ILegendProps{
    color: string;
}

const animate = keyframes`

    0%{
        transform: translateX(100px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const Container = styled.div`

    width: 49%;
    height: 260px;
    margin: 10px 0px;
    background-color: #363636;
    color: #fff;
    border-radius: 7px;
    display: flex;
    animation: ${animate}.5s;
`;

export const SideLeft = styled.aside`

    padding: 30px 20px;

    > h2{
        margin-bottom: 30px;
    }
`;
export const LegendContainer = styled.ul`

    list-style: none;
    height: 160px;
    padding-right: 15px;
    overflow-y: scroll;

    ::-webkit-scrollbar{
        width: 10px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: #1C1C1C;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track{
        background-color: #363636;
    }
`;
export const Legend = styled.li<ILegendProps>`

    display: flex;
    align-items: center;
    margin-bottom: 7px;

    > div{
        background-color: ${props => props.color};
        width: 40px;
        height: 40px;
        border-radius: 7px;
        font-size: 16px;
        line-height: 40px;
        text-align: center;
    }

    > span{
        margin-left: 7px;
    }
`;
export const SideRight = styled.main`
    
    display: flex;
    flex: 1;
    justify-content: center;
`;
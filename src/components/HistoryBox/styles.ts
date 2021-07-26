import styled, {keyframes} from "styled-components";

interface ILegendProps{
    color: string;
}


const animate = keyframes`

    0%{
        transform: translateX(-100px);
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
    width: 100%;
    margin: 10px 0px;
    padding: 10px 10px;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    animation: ${animate}.5s;
`;

export const ChartContainer = styled.div`
    height: 340px;
`;

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;

    h2{
        margin-bottom: 10px;
        margin-left: 5px;
    }
    h2 span{
        color: ${props => props.theme.colors.secondary};
    }

`;
export const LegendContainer = styled.ul`
    list-style: none;
    display: flex;
`;
export const Legend = styled.li<ILegendProps>`

    display: flex;
    align-items: center;
    margin-bottom: 7px;
    margin: 0px 7px;

    > div{
        background-color: ${props => props.color};
        width: 30px;
        height: 30px;
        border-radius: 7px;
        font-size: 16px;
        line-height: 40px;
        text-align: center;
    }

    > span{
        margin-left: 7px;
        font-size: 20px;
    }
`;
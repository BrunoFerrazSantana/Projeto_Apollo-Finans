import styled from "styled-components";

interface IContainerProps{
    color: string;
}

export const Container = styled.div<IContainerProps>`

    width: 32%;
    height: 150px;
    margin: 10px 0px;
    background-color: ${props => props.color};
    color: #fff;
    border-radius: 5px;
    padding: 10px 20px;
    position: relative;
    overflow: hidden;

    > img{
        height: 110%;
        position: absolute;
        top: -10px;
        right: -15px;
        opacity: .3;
    }
    
    > span{
        font-size: 20px;
        font-weight: 500;
    }

    > small{
        font-size: 12px;
        position: absolute;
        bottom: 10px;
    }
`;
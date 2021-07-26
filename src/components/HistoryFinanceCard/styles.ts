import styled, {keyframes} from "styled-components";

interface ITagProps{

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

export const Container = styled.li`
    background: ${props => props.theme.colors.success};
    color: #fff;
    list-style: none;
    border-radius: 15px;
    margin: 10px 0px;
    padding: 12px 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all .3s;
    animation: ${animate}.5s ease;

    position: relative;

    &:hover{
        background-color: #DCDCDC;
        color: #000;
        transform: translateX(10px);
    }

    > div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
    }
    
    > div span{
        font-size: 20px;
        font-weight: 500;
    }
    
`;

export const Tag = styled.div<ITagProps>`

    width: 13px;
    height: 55%;
    background-color: ${props => props.color};
    position: absolute;
    left: 0;
`;
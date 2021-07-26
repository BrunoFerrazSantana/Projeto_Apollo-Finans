import styled, {keyframes} from "styled-components";

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
    width: 49%;
    height: 260px;
    background-color: #4B0082;
    color: #fff;
    border-radius: 7px;
    margin: 10px 0px;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    animation: ${animate}.5s;

    > header img{
        width: 50px;
    }

    > header p{
        font-size: 18px;
    }
`;
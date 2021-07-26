import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #363636;

    > span{
        color: #fff;
        font-size: 22px;
        margin-bottom: 10px;
        text-align: center;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 40px;
    
    > h2{
        color: #FFF;
        margin-left: 7px;
    }

    > img{
        width: 150px;
        height: 150px;
    }

    > h2 span{
        color: #00FA9A;
    }
`;

export const Form = styled.form`
    width: 40%;
    height: 85%;
    padding: 30px;
    border-radius: 0px 20px 20px 0px;
    background-color: #00FA9A;

`;
export const FormTitle = styled.h1`
    color: #363636;
    margin-bottom: 50px;
    margin-top: 40px;
    
    &:after{
        content: '';
        display: block;
        width: 60px;
        border-bottom: 10px solid #FFF;
        border-radius: 40px;
    }
`;
import styled from "styled-components";

export const Container = styled.main`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    box-sizing: border-box;
`

export const Box = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img{
        width: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    span{
        font-size: 3rem;
        color: #666161;
        font-weight: 600;
        margin-top: 10%;
        margin-bottom: 10%;
    }

    a{
        color: #fff;
        padding: 18px 60px;
        font-size: 1.25rem;
        border-radius: 30px;
        background: linear-gradient(45deg, #2980B9, #7FC1EC);
        transition: all 0.3s ease-in-out;

        &:hover{
            background: linear-gradient(45deg, #2980B9, #2980B9);
            opacity: 0.8;
        }
    }
`

export const CenarioBottom = styled.img`
    position: absolute;
    width: 200px;
    bottom: 0;
    left: 0;

    z-index: -1;
`

export const CenarioTop = styled.img`
    position: absolute;
    width: 240px;
    top: 0;
    right: 0;
    
    z-index: -1;
`

export const CaixaError = styled.div`
    
`

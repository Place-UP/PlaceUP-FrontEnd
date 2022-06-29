import styled from "styled-components";

const Media = {
    Laptop: "@media(max-width: 1024px)",
    Tablet: "@media(max-width: 768px)",
    MobileL: "@media(max-width: 425px)"
}

export const Container = styled.main`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    box-sizing: border-box;

    ${Media.Laptop} {
        flex-direction: column;
    }
`

export const Box = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    img{
        width: 250px;
        display: flex;
        justify-content: center;
        align-items: center;

        ${Media.Laptop}{
            width: 180px;
        }
    }

    span{
        font-size: 3rem;
        color: ${({ theme }) => theme.fontColor};
        font-weight: 600;
        margin-top: 10%;
        margin-bottom: 10%;

        ${Media.Laptop}{
            margin-top: 5%;
            margin-bottom: 5%;
            font-size: 1.2rem;
        }
    }

    a{
        color: #fff;
        padding: 18px 60px;
        font-size: 1.25rem;
        border-radius: 30px;
        background: linear-gradient(45deg, #2980B9, #7FC1EC);
        transition: all 0.3s ease-in-out;

        ${Media.Laptop}{
            padding: 15px 45px;
            font-size: 0.9rem;
        }

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

export const BoxError = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 400px;
        ${Media.Laptop}{
            width: 250px;
        }
    }
`
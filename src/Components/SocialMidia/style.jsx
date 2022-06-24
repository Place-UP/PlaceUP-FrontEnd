import styled from "styled-components";
import 'animate.css';

const Media = {
    MobileL: "@media(min-width: 425px)",
    Tablet: "@media(min-width: 768px)"
}

export const SocialMidia = styled.div`
    width: 100%;
    height: 100%;

    animation: fadeInDown 1.5s ease-in-out;

    ul{
        display: flex;
        justify-content: space-around;
        align-items: center;

        li{
            font-size: 1.8rem;
            cursor: pointer;
            color: #2980B9;
            

            &:hover{
                opacity: 0.8;
                transition: all 0.3s ease-in-out;
                transform: translate(0, -8px);
            }
        }
    }
`
import styled from "styled-components";

export const SocialMidia = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 30px;

    ul{
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        li{
            font-size: 2.5rem;
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
import styled from "styled-components";

export const Forget = styled.div`
    color: #2980B9;
    font-weight: 500;
    font-family: 'Poppins';
  

    input[type="checkbox"]{
        position: relative;
        appearance: none;
        -webkit-appearance: none;
        padding: 6px;
        border: 3px solid #2980B9;
        border-radius: 40px;
        cursor: pointer;
        vertical-align: middle;
    }

    input[type="checkbox"]::after{
        position: absolute;
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        content: "\f00c";
        font-size: 0.8rem;
        color: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
    }

    input[type="checkbox"]:hover{
        transition: all 0.1s ease-in;
        background-color: #ccc;
    }

    input[type="checkbox"]:checked{
        background-color: #2980B9;
    }

    input[type="checkbox"]:checked::after{
        display: block;
    }
`
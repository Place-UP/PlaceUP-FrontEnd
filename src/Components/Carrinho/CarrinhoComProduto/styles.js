import styled, { keyframes } from "styled-components";

const media = {
  Tablet: "@media(max-width: 935px)",
  Mobile: "@media(max-width: 435px)"
};

export const Section = styled.section`
  height: 100%;
  
  .cart{
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 25%;
    background-color: ${({ theme }) => theme.cards};
    margin: auto;
    transition: width 0.5s;
    animation: fadeInRightBig 0.3s ease-in-out ;
    z-index: 9;
  }

  .Close{
    color: #2980B9;
    width: 40px;
    height: 40px;
    margin-left: 25px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
     border-radius: 50%;
  

    &:hover{
      background-color: #F3ECEC;
    }
  }

  ${media.Tablet} {
    display: none;
    .cart{ 
      width: 50%;
    }

    .buttonSeeMore{ width: 80%;}
  }   
  
  ${media.Mobile} {
    .cart{ 
      width: 100%;
    }
  }
`

export const Information = styled.div`
    display: flex;
    border-bottom: 1px solid #A6A8A9;
    padding: 15px 0;

    .business{ margin-left: 25px; }

    h1{
      margin-top: 5px;
      font-size: 20px;
      color: ${({ theme }) => theme.fontColor};
      font-weight: bold;

      ${media.Tablet} { font-size: 18px; }  

      ${media.Mobile} { font-size: 15px; }  
    }

    h3{
      font-size: 17px;
      color: ${({ theme }) => theme.fontColor};

      ${media.Tablet} { font-size: 15px; }  

      ${media.Mobile} { font-size: 12px; }   
    }
`;

export const Cart = styled.div`
    position: relative;
    text-align: center;

    .cartContainer{ 
        text-align: center;  
    }

    .Titule{
      font-size: 25px;
      font-weight: bold;
      margin-top: 20px;
      color: ${({ theme }) => theme.fontColor};
      margin-bottom: 30px;
    }

    .ReservationSystem{
      margin: 0 auto;
    }
`;

export const Day = styled.div`
    background-color: ${({ theme }) => theme.body};
    width: 45%;
    height: 80px;
    margin: 0 auto;
    border-radius: 10px;
    border: 2px solid #2980B9;

    h1{      
      font-size: 17px;
      font-weight: bold;
      color: ${({ theme }) => theme.fontColor};
      margin-top: 15px;

      ${media.Tablet} { font-size: 15px; }  

      ${media.Mobile} { font-size: 12px; }   
    }

    p{
      font-size: 15px;
      color: ${({ theme }) => theme.fontColor};
      margin-top: 10px;
      
      ${media.Tablet} { font-size: 13px; }  

      ${media.Mobile} { font-size: 11px; }  
    }
`;

export const Scheduling = styled.div`
    background-color: ${({ theme }) => theme.body};
    width: 45%;
    height: auto;
    padding-bottom: 10px;
    margin: 15px auto;
    border-radius: 10px;
    border: 2px solid #2980B9;

    h1{      
      font-size: 17px;
      font-weight: bold;
      margin-top: 5px;
      color: ${({ theme }) => theme.fontColor};

      ${media.Tablet} { font-size: 15px; }  

      ${media.Mobile} { font-size: 12px; }   
    }

    p{
      font-size: 15px;
      margin-top: 5px;
      color: ${({ theme }) => theme.fontColor};

      ${media.Tablet} { font-size: 13px; }  

      ${media.Mobile} { font-size: 11px; }   
    }
`;

export const Product = styled.div`
    margin-top: 1.5rem;
    height: 100%;
    overflow-y: scroll;

    &::-webkit-scrollbar{
      width: 0;
    }

    p{
      color: #E6533F;
      display: flex;
      padding: 15px 5%; 
      cursor: pointer;      
    }
`;

export const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;

    img{
      width: 50px;
    }

    .Qtd {
      width: 20%;
      font-size: 1,5;
    }

    .names{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
    }
`

export const ProductContainer = styled.div`
    width: 90%;
    height: 200px;
    margin: 20px auto;

    h1{
      font-size: 15px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: ${({ theme }) => theme.fontColor};
    }
`;

export const Total = styled.div`
      width: 90%;
      margin: 10px auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-top: 2px solid #297FB8;

      h1{
        font-family: 'Poppins';
        font-size: 18px;
        font-weight: 500;       
        color: ${({ theme }) => theme.fontColor};
      }
`

export const Finalize = styled.div`
  
    .buttonSeeMore{
      width: 60%;
      height: 55px;
      margin: 15px auto 0px 20%;
      border-radius: 20px;
      font-size: 17px;
      color: white;
      cursor: pointer;
      background-color: #297FB8;
    }

    .buttonSeeMore:hover{   opacity: 0.8;   }
`;

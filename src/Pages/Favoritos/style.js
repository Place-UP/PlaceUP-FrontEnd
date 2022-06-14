import styled from "styled-components";

const Media = { 
    Desktop: "@media(max-width:1189px)",
    Tablet: "@media(max-width:768px)",
    MobileL: "@media(max-width:550px)",
    MobileM: "@media(max-width:375px)",
}

export const Body = styled.body`
width: 60%;
height: 570px;
margin-left: 13%;
margin-right: 28%;

.Title{
        position: relative;
        height: 90px;
        left: 3%;
        top: 9%;

        p{
        color: #2D3E50;
        font-weight:bold;
        font-size: 40px;
      }
    }
  `;

export const Main = styled.div`

`
 export const Itens =styled.div`
 width: 100%;
 height: 84.2%;
 margin-top: 30px;
 flex-direction: row;
 display: flex;
 justify-content: space-evenly;
 flex-wrap: wrap;
 gap: 10px 20px;
 `
 
export const Merchant1 = styled.div`
width: 160px;
height: 200px;
box-shadow: rgba(41, 127, 184, 1) 0px 8px 0px 0px;
border-radius: 40px;
flex-direction: column;
display: flex;
align-items: center;
align-content: center;

.Icon{
width: 70px;
height: 70px;
padding: 2px;
border: black solid 1px;
border-radius: 50%;
}

.Heart{
width: 90px;
height: 90px;
}
 
`
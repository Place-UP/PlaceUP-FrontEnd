import styled from "styled-components";

const Media = { 
Desktop: "@media(max-width:1189px)",
Tablet: "@media(max-width:768px)",
MobileL: "@media(max-width:550px)",
MobileM: "@media(max-width:375px)",

}

  export const Main = styled.main`
    width: 100%;
    height: 500px;
    background-color: #ECF0F1;
    ${Media.Tablet}{
      height: 700px;
    };
    ${Media.MobileL}{
      height: 675px;
    }

    .Title{
      display: flex;
      align-items: center;
      justify-content: center}
    p{
    font-size: 50px;
    width: 80%;
    text-align: center;
    margin: auto;
    font-weight: bold;
    font-family: "Bakbak One";
    text-decoration: underline 4px #2980B9; 
    ${Media.MobileL}{
        font-size: 30px;
        
      }
   
    }
  `;

export const ContactUs = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 35px;
    align-items:center;
    ${Media.Tablet}{
        justify-content: center;
        flex-direction: column;
      }

`

export const FaleImg = styled.div`
width: 40%;
display: flex;
margin-left:5%;

${Media.Tablet}{
  margin-left: 0%;
}

Img{
  width: 100%;
}
`
export const Contact = styled.form`
display:flex;
flex-direction: column;
width: 50vw;
align-items: center;
justify-items: center;
border-top:20px;
border-bottom: 20px;


Form{
  width: 100%;
  font-family:times;
}

.Assunto{
  margin-top: -1px;
  border-radius:5px;
  border: 1.5px solid #297FB8;
  height: 200px;
  width: 100%;
  resize: none;
}

 label{
   display: flex;
   flex-direction: column;
 }

input{
  margin-top: 10px;
  border-radius:5px;
  border: 1.5px solid #297FB8;
  height: 50%;
  display: flex;
}


button {
 font-family: inherit;
 font-size: 20px;
 background: royalblue;
 color: white;
 padding: 0.7em 1em;
 padding-left: 0.9em;
 display: flex;
 align-items: center;
 border: none;
 border-radius: 16px;
 overflow: hidden;
 transition: all 0.2s;
 margin: auto;
}

button span {
 display: block;
 margin-left: 0.3em;
 transition: all 0.3s ease-in-out;
}

button svg {
 display: block;
 transform-origin: center center;
 transition: transform 0.3s ease-in-out;
}

button:hover .svg-wrapper {
 animation: fly-1 0.6s ease-in-out infinite alternate;
}

button:hover svg {
 transform: translateX(1.2em) rotate(45deg) scale(1.1);
}

button:hover span {
 transform: translateX(5em);
}

button:active {
 transform: scale(0.95);
}

@keyframes fly-1 {
 from {
  transform: translateY(0.1em);
 }

 to {
  transform: translateY(-0.1em);
 }
}

`

export const Footer=styled.div`
align-items: flex-end;
margin-top: 120px;

`
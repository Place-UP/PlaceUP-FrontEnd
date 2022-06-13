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

input[type=submit]{
  font-weight: bold;
  background-color: #297FB8;
  border-radius: 50px;
  height:35px;
  cursor: pointer;
  color: white;
  margin: auto;
}
`

export const Footer=styled.div`
align-items: flex-end;
margin-top: 120px;

`
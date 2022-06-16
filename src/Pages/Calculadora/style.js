import styled from "styled-components";


export const Main = styled.div`
background: linear-gradient(304.69deg, rgba(116, 189, 235, 0.2) 0.55%, rgba(240, 240, 255, 0.51) 69.7%, #EDF4F8 98.57%);
width: 100%;
margin:auto;
.ContainerCalculator{
    display:flex;
    justify-content:space-between;
    align-items:center;
}
.container{
    width:90%;
margin:auto;

}
.backButton{
    width:4%;
    padding-top:20px;
    float: left;
    cursor:pointer;
}
.header{
    padding-top:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    .textArea{
        text-align:center;
h1{
    font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 40px;
color: #2980B9;
margin-bottom:10px;
}
p{
    font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 20px;
color: #807B7B;
}
    }
}

.ResulteWhite{
   width: 563px;
height: 332px;
background: #FFFFFF;
box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
border-radius: 62px;

h1{
    margin-top:30px;
    text-align:center;
font-family: 'Lato';
font-style: normal;
font-size: 30px;
color: #493D3D;
}
span{
        display: flex;
    justify-content: center;
    margin-top:50px;
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 40px;
color: #2D3E50;
text-align: center;

}
.InformationsDescription{
    margin-top:30px;
    margin-left:30px;
    display:flex;
    align-items:flex-start;
    gap:30px;
    flex-direction: column;
    justify-content:start;
}
}
`
export const InputArea = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
margin: 40px 0 ;
p{
    font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 36px;
color: #807B7B;
}

input{
    background-color:transparent;
}
`

export const ButtonStyle = styled.div`
display:flex;
align-items: center;
justify-content: center;
width: 209px;
height: 50px;
cursor: pointer;
background: #2BA0D2;
box-shadow: 9px 27px 20px rgba(0, 0, 0, 0.1);
border-radius: 19px;
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 48px;
text-align: center;
color: #000000;
`
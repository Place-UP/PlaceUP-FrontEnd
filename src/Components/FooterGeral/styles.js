import styled from 'styled-components';

const media = {TabletAndMobile: '@media screen and (max-width: 863px)'}

export const Footergeral = styled.div`
    width: 100%;
    height: auto;
    padding-bottom: 50px;
    text-align: center;
    background-color: #2C3E50;

    ${media.TabletAndMobile}{
        .container{
            width: 100%;
            padding: 20px 0px;
            display: block;
            flex-direction: row;
            justify-content: space-evenly;
        }
    
        .linksFooter{display: block;}
    
        .linksFooter a{text-align: center;}
    
        .links:nth-child(2){margin-top: 20px;}
    
        .Social{text-align: center;}
    
        .Socialh1{
            text-align: center;
            font-size: 20px;
            margin: 50px 0;
            color: white;
        }
        
        .icons{
            margin: 50px auto;
            padding: 0px 15px 0px 0px;
            display: block;
        }
    
        .Copyright{
            padding: 0 2%;
            font-size: 18px;
        }
    }
`;

export const ContainerFooter = styled.div`
    width: 100%;
    padding: 20px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const LinksFooter = styled.div`
    display: flex;
    a{
        font-family:"Lato",sans-serif;
        margin: 20px 0;
        display: block;
        font-size: 18px;
        cursor: pointer;
        text-align: left;
        color: white;
    }
    .links{
        margin: 20px;
        display: block;
    }

    .links:nth-child(2){
        margin-top: 61px;
        display: block;
    }
`;

export const Logo = styled.img`
    width: 120px;
    height: 110px;
    margin: 20px;
`;

export const Icons = styled.span`
    width: 40px;
    height: 40px;
    margin: 0px 20px;
    color: white;
`;

export const FooterP = styled.p`
    font-family:'Lato',sans-serif;
    text-align: center;
    font-size: 20px;
    color: white;
`;

export const FooterH1 = styled.h1`
    text-align: center;
    font-size: 18px;
    margin: 20px 0;
    color: white;
    font-family:'Lato',sans-serif;
`;
import styled from "styled-components";

const media = {
  Tablet: "@media(max-width: 940px)",
  MobileM: "@media(max-width: 440px)",
  MobileS: "@media(max-width:320px)",
};

export const Home = styled.div` 
  background-color: #ECF0F1;  
 `;

export const SectionSearch = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 50%;

    ${media.MobileM}{ 
      width: 80%;
      margin-right: auto; 
    }

    ${media.MobileS}{ 
      width: 60%;
      margin-right: auto; 
    }
`;

export const SearchBar = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  padding: 0px 2%;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 20px;

  span{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
  }
    
  .search{
    width: 95%;
    height: 40px;
    padding: 0px 20px 0px 10px;
    background-color: white;
    background-size: 15px;
    background-position: 10px 9px;
    background-repeat:no-repeat;     
    border:0;
    outline: 0;    
    border-radius: 20px;
  }
`;

export const Car = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    width: 30px;
    height: 30px;                
    cursor: pointer;
  }

  ${media.MobileS}{ margin-left: 10px;}  
`;

export const Filter = styled.div`
    width: 100%;
    margin: 30px auto;

    select{      
      width: 150px;
      height: 40px;
      padding: 0px 4px;
      margin: auto 10px 10px 0px;
      border-radius: 20px ;
    }

    select:nth-child(2){      
      width: 150px;
      height: 40px;
      padding: 0px 4px;
      margin: 10px auto 10px 0px;
      border-radius: 20px ;
    }
    
    ${media.MobileM}{    
      select{      
        width: 150px;
        height: 40px;
        padding: 0px 4px;
        margin: 10px 0px;
        border-radius: 20px ;
      }    
      margin-left: auto;
      margin-right: auto; 
    }
`;

export const Category = styled.div`
  width: 60%;
  padding: 30px 0 30px 17%;

  h1{   
    font-size: 25px; 
    margin-left: 5px;
    font-weight: 800;      
    font-family: 'Bakbak One', cursive;
  }

  .containerCategory{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: 20px;
    justify-content: center;
    align-items: center;
    justify-content: space-between;

    img{
      width: 80px;
      height: 85px;
    }

    ${media.Tablet}{
      width: 100%;
      gap: 10px;
      grid: auto / auto auto;
    }

    ${media.MobileM}{
      width: 100%;
      grid-template-columns: auto auto auto 20px;
      grid: auto / auto;
      margin: 0 auto;
    }

    ${media.MobileS}{
      width: 100%;
      grid-template-columns: auto auto auto 20px;
      grid: auto / auto;
      margin: 0 auto;
    }
  }
        
  ${media.MobileM}{   
    margin-left: auto;
    margin-right: auto; 
  }
`;

export const FilterCategory = styled.div`
    width: 160px;
    height: 80px;
    border-radius: 8px;
    margin-top: 70px;
    text-align: center; 
    background-color: white;

    img{
        width: 90px;
        height: 90px;
        font-size: 17px;
        margin-top: -50px;
    }
`;

export const InfoCategory = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;    

    h2{   
      text-align: center;
      font-size: 14px; 
      margin-left: 5px;
      font-weight: 600;
      cursor: pointer;

      &::before{
        content: '';
        border-left: 5px solid #E85959;
        padding-right: 8px;
      }
    }

    p{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25px;
      height: 25px;
      background-color: #E85959;
      color: white;
      font-size: 17px;
      border-radius: 4px;
      line-height: -200px;  
      cursor: pointer;
      font-family: 'Lato';
    }
`;
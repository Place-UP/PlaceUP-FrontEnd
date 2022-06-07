import React from "react";

import { Header } from "../../Components/HeaderUsuario/HeaderUser";
import { FooterGeral } from "../../Components/FooterGeral/footer";
import { Main, ContactUs, Contact, FaleImg, Footer} from "./style";
import FaleConoscoImg from "../FaleConosco/img/FaleConoscoPC.svg";

export function FaleConosco(){
   

    
    return (
        <>
        <Header/>
        <Main>
          


            <div className="Title">
            <p>
                Fale Conosco
            </p>
            </div>


            <ContactUs>
               <FaleImg>
                <img src= {FaleConoscoImg} alt = "Personagem Mexendo em um Computador"/>
                </FaleImg>


                <Contact>
                <form action="https://formsubmit.co/iplaceup.2022@gmail.com" method="POST" >

                    <label> 
                        Nome 
                        <input type="text" required/>
                    </label> <br/>

                    <label> 
                        Email 
                        <input type="email" required/> 
                    </label> <br/>

                    <label> 
                        Telefone
                        <input type="number" required/>
                    </label><br/>

                    <label>
                      Assunto 
                      </label><br/>
                    <textarea className="Assunto" required cols="33"></textarea>

                    <input type="submit" value ="Enviar"/>
                   
                </form>
                </Contact>
    
    
            </ContactUs>

        </Main>

        <Footer>
        <FooterGeral/>
        </Footer>
        
        </>
       
       
    );
    }
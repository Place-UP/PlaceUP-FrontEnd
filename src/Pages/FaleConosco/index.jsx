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

                  <button>
  <div class="svg-wrapper-1">
    <div class="svg-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
      </svg>
    </div>
  </div>
  <span>Enviar</span>
</button>
                   
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
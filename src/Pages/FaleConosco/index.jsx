import React from "react";
import { Header } from "../../Components/HeaderUsuario/HeaderUser";
import { FooterGeral } from "../../Components/FooterGeral/footer";
import { Main, ContactUs } from "./style";
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
                <div>
                <img src= {FaleConoscoImg} alt = "Personagem Mexendo em um Computador"/>
                </div>
        
                <div className="Form">
                            <div id="after_submit"></div>
                <form id="contact_form" action="https://formsubmit.co/iplaceup.2022@gmail.com" method="POST" enctype="multipart/form-data" >

                <div class="row">
                    <label class="required" for="name">Seu Nome:</label><br />
                    <input id="name" class="input" name="name" type="text" value="" size="30" /><br />
                    <span id="name_validation" class="error_message"></span>
                </div>
                
                <div class="row">
                    <label class="required" for="email" >Seu Email:</label><br />
                    <input id="email" class="input" name="email" type="text" value="" size="30" /><br />
                    <span id="email_validation" class="error_message"></span>
                </div>

                <div class="row">
                    <label class="required" for="message">Sua Mensagem:</label><br />
                    <textarea id="message" class="input" name="message" rows="7" cols="30"></textarea><br />
                    <span id="message_validation" class="error_message"></span>
                </div>
                    <input id="submit_button" type="submit" value="Enviar Mensagem" />
                    <input type="hidden" name="_next" value={ FaleConosco }/>
                    <input type="hidden" name="_template" value="table"/>
                </form>
                   
                
    
                </div>

    
            </ContactUs>
            

        </Main>
        <FooterGeral class="footer"/>
       
        </>
       
       
    );
    }
import React from "react";
import logo from "./images/logo.png";
import { Home, Category, Content } from "./styles";
import { FooterGeral } from "../../Components/FooterGeral/footer";

export function Dicas() {
  return (
    <>
      <Home>
        <Category>
          <img src={logo} alt="logo" />
          <h1>Dicas de segurança</h1>
        </Category>

        <Content>
          <h1>Para consumidores</h1>
          <div class="underlined"></div>

          <p>Sempre dê preferência a dispositivos e redes de confiança: 
          Cuidado com aparelhos e redes de internet públicas ou compartilhadas, 
          pois aumenta a exposição das suas informações;</p>

          <p>Proteja sua conta: nunca compartilhe os códigos que enviamos em seu celular
          ou e-mail. Isso pode permitir outras pessoas acessem sua conta.;</p>

          <p>Confira os comentários das avaliações: 
          veja o que outros clientes estão falando sobre o restaurante e seus pratos;</p>
          
          <p>Cadastre seu endereço corretamente: 
          Dê informações precisas sobre o endereço, com complemento 
          (quando existir) e pontos de referência;</p>

          <p>Atenção ao pagar: Ao pagar no ato da entrega do seu pedido 
          verifique se o valor está correto e caso ocorra algum erro durante 
          a cobrança, confira no seu banco/celular antes de pagar de novo;</p>

          <p>Atenção com e-mail e SMS falso - Verifique se o remetente do email é a 
          PlaceUP@place.com antes de responder algum contato 
          e não compartilhe seus dados via SMS ou Whatsapp;</p>

        </Content>

        <FooterGeral />
      </Home>
    </>
  );
}

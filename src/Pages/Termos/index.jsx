import React from "react";
import logo from "./images/logo.png";
import { Home, Category, Content } from "./styles";
import { FooterGeral } from "../../Components/FooterGeral/footer";
import { InputDarkMode } from "../../Components/inputDark";

export function Termos() {
  return (
    <>
      <Home>
        <InputDarkMode />
        <Category>
          <img src={logo} alt="logo" />
          <h1>Termos e condições de uso</h1>
        </Category>

        <Content>
          <h1>Para nossos usuários</h1>
          <div class="underlined"></div>

          <p>1.INFORMAÇÃO: PLACEUP BRASIL INTERMEDIAÇÃO DE NEGÓCIOS LTDA CNPJ: 00.000.000/0000-00, com constituída na cidade de São Paulo, para os efeitos destes termos será definida como A OPERADORA.</p>

          <p>2.NATUREZA JURÍDICA: Estes termos e condições de uso regulam a relação contratual, de caráter comercial, que une os Consumidores que têm acesso à plataforma virtual e a OPERADORA da mesma, especialmente na autorização de uso que outorga esta última a favor do Consumidor.</p>

          <p>3.DEFINIÇÕES Cookies: Arquivos enviados pelo servidor do site para o computador do USUÁRIO, com a finalidade de identificar o computador e obter dados de acesso, como páginas navegadas ou links clicados, permitindo, desta forma, personalizar a utilização do site, de acordo com o seu perfil.</p>
          <p>Comércio Eletrônico: Abrange o envio, a transmissão, a recepção, o armazenamento de mensagens de dados pela via eletrônica.          </p>
          <p>Consumidores (usuários):  são as pessoas físicas cadastradas na Plataforma de Internet denominada PlaceUP que acessem a esta para solicitar um mandato remunerado, cujo encargo consiste na celebração de um contrato de compra ou qualquer outro tipo de contrato lícito, com o fim de adquirir bens ou serviços.</p>
          
          <p>Cadastre seu endereço corretamente: 
          Dê informações precisas sobre o endereço, com complemento 
          (quando existir) e pontos de referência;</p>

          <p>Dados pessoais: É toda informação que permite identificar ou fazer identificável uma pessoa física.
          Mandatário: Pessoa física que aceita realizar a gestão do encargo solicitado pelo Consumidor através da Plataforma.
          Interação na Plataforma: Faculdade de acesso dos Consumidores para conhecer os produtos e serviços exibidos pelos parceiros da OPERADORA, a publicidade colocada à disposição na Plataforma e manifestar sua vontade de solicitar um encargo.</p>

          <p>Maior de idade: Pessoa física maior de dezoito (18) anos.</p>

          <p>Mensagens de dados: A informação gerada, enviada, recebida, armazenada ou comunicada por meios eletrônicos, ópticos ou similares, como poderiam ser, entre outros, o Intercâmbio Eletrônico de Dados (EDI), Internet, o correio eletrônico, o telegrama, o telex e o telefax.</p>

          <p>Operadora da plataforma: Encarregada de administrar operativamente e funcionalmente a Plataforma, representada para os efeitos destes termos pela  PlaceUP, ou pela pessoa física ou jurídica que ela designar.</p>

          <p>Meios de pagamentos: Serviço que permite a realização de pagamentos pelos Consumidores diretamente aos Mandatários de Serviços, através de meios eletrônicos, utilizando plataformas tecnológicas (software), como por exemplo as máquinas de cartão.</p>

          <p>Atenção com e-mail e SMS falso - Verifique se o remetente do email é a 
          PlaceUP@place.com antes de responder algum contato 
          e não compartilhe seus dados via SMS ou Whatsapp;</p>

        </Content>

        <FooterGeral />
      </Home>
    </>
  );
}
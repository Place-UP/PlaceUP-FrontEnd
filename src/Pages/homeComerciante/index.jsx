import React, { useState } from 'react';
import { HeaderComerciante } from "../../Components/HeaderComerciantes/HeaderComerciante";
import { MenuPrincipal } from "../../Components/NavVisualizacaoComerciante/index";
import { IoIosNotifications } from "react-icons/io";
import * as B from "./styles";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

export function HomeComerciante() {

    const [value, onChange] = useState(new Date());

  return (
    <>
      <HeaderComerciante />
      <B.Main>
        <MenuPrincipal />

        <B.Top>
            <h1>DASHBOARD</h1>
            <IoIosNotifications className="notification" />
        </B.Top>

        <B.On>
            <h1>NameUser</h1>
        </B.On>

        <B.ContainerCalendar>
           <Calendar onChange={onChange} value={value} className="calendar" />
           <div className='grafic'>
                <h2>LUCRO</h2>

                <div className='prece'>                    
                    <h3>R$</h3>
                    <h2>2.250,30</h2>
                </div>
           </div>
        </B.ContainerCalendar>

        <B.Contagem>
            <div className='visita'>
                <h1>TOTAL DE VISITA</h1>
                <p>53</p>
            </div>

            <div className='reservas'>
                <h1>TOTAL DE RESERVAS</h1>
                <p>128</p>
            </div>

            <div className='pendentes'>
                <h1>TOTAL DE PEDIDOS PENDENTES</h1>
                <p>27</p>
            </div>
        </B.Contagem>

          <B.Seller>
           
            <div className='tableSeller'>
            <h1 className='title'>PRODUTOS MAIS VENVIDOS</h1>

              <div className='containerProducts'>
                <div className='product1'>                
                    <div class="container">
                      <h1>COCA COLA</h1>
                      <div class="Loading"></div>
                      <p>30</p>
                    </div>
                </div>

                <div className='product2'>                
                    <div class="container">
                      <h1>CAFÉ 3 CORAÇÕES</h1>
                      <div class="Loading"></div>                    
                      <p>25</p>
                    </div>
                </div>

                <div className='product3'>                
                    <div class="container">
                      <h1>AÇÚCAR UNIÃO</h1>
                      <div class="Loading"></div>                    
                      <p>23</p>
                    </div>
                </div>

                <div className='product4'>                
                    <div class="container">
                      <h1>CHOCOLATE LACTA</h1>
                      <div class="Loading"></div>                    
                      <p>18</p>
                    </div>
                </div>

                <div className='product5'>               
                    <div class="container">
                      <h1>BOLACHA OREO</h1>
                      <div class="Loading"></div>                    
                      <p>14</p>
                    </div>
                </div>
              </div> 

            </div>                
           </B.Seller>
      </B.Main>
    </>
  );
}
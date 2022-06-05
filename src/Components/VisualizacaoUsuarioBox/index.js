import { Main, ContWhitePart } from "./style";
import { GrFormPrevious, GrFormNext, GrFormAdd } from "react-icons/gr";
export function Box() {
  return (
    <>
      <Main>
        <ContWhitePart>
          <div className="Offers">
            <h1>Ofertas</h1>

            <div className="FunctionCarousel">
              <div>
                <GrFormPrevious className="Icon" />
                <GrFormNext className="Icon" />
              </div>

              <p>Ver Todos</p>
            </div>
          </div>

          <div className="Carousel">
            <div className="image">
              <GrFormAdd className="AddIcon" />
            </div>
            <div className="Info">
              <span className="Tittle"> Ketchup</span>
              <span className="Quant"> Ketchup</span>
              <span className="OldPrice"> Ketchup</span>
              <span className="Price"> Ketchup</span>
            </div>
          </div>
        </ContWhitePart>
      </Main>
    </>
  );
}

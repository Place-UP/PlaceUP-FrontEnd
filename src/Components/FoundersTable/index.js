import { FoundersPart } from "./style";
import BrunoPicFounders from "./img/BrunoPicFounders.svg";
import GabbePicFounders from "./img/GabbePicFounders.svg";
import GustavoPicFounders from "./img/GustavoPicFounders.svg";
import IgorPicFounders from "./img/IgorPicFounders.svg";
import KaykyPicFounders from "./img/KaykyicFounders.svg";
import LarisssaPicFounders from "./img/LarissaPicFounders.svg";
import VictorPicFounders from "./img/VictorPicFounders.svg";
import TiagoPicFounders from "./img/TiagoPicFounders.svg";
export default function TableFounders(props) {
  return (
    <FoundersPart>
      <div className="Title">
        <h1>Fundadores</h1>
        <hr />
      </div>
      <div className="contPainel">
        <span className="circleBlue">
          <div className="yellowCircle"></div>
        </span>
        <div className="WhitePart">
          <div className="AreaContent">
            <img src={BrunoPicFounders} />
            <h1 className="contentText">Bruno Costa</h1>
          </div>
          <div className="AreaContent">
            <img src={GabbePicFounders} />
            <h1 className="contentText">Gabbe Silva</h1>
          </div>
          <div className="AreaContent">
            <img src={GustavoPicFounders} />
            <h1 className="contentText">Bruno Costa</h1>
          </div>
          <div className="AreaContent">
            <img src={IgorPicFounders} />
            <h1 className="contentText">Bruno Costa</h1>
          </div>
          <div className="AreaContent">
            <img src={KaykyPicFounders} />
            <h1 className="contentText">Bruno Costa</h1>
          </div>
          <div className="AreaContent">
            <img src={LarisssaPicFounders} />
            <h1 className="contentText">Bruno Costa</h1>
          </div>
          <div className="AreaContent">
            <img src={VictorPicFounders} />
            <h1 className="contentText">Bruno Costa</h1>
          </div>
          <div className="AreaContent">
            <img src={TiagoPicFounders} />
            <h1 className="contentText">Bruno Costa</h1>
          </div>
        </div>
      </div>
    </FoundersPart>
  );
}

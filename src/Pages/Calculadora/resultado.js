import react from "react";
export default function Resultado(props) {
  return (
    <>
      <span className='span-total'>Valor total : {props.resultado}</span>
    </>
  );
}

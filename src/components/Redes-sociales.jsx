 import styled from "./RedesSociales.module.css"

 const RedesSociales = ({url,img,nombre}) => {
  return ( 
    <div class={styled.link}>
       <a href={url} target="_blank" className={styled.a}> <img src={img} alt="" className=""  /></a> 
       <p>{nombre}</p>
      </div>
   );
}
 
export default RedesSociales;
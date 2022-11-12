import styled from "./TarjetaProyecto.module.css"
const TarjetaProyecto = ({title,img,figcaption,description,url}) => {
  return ( 
    <div className={styled.boxTarjeta}>
      <figure className={styled.figure}>
        <img className={styled.img} src={img} alt="" />
      </figure>
      <h3 className={styled.h3}>{title}</h3>
      {description || <p className={styled.p}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veritatis delectus maiores voluptates. Quam perferendis eaque aspernatur, itaque eius eum laboriosam earum eligendi! Molestias velit delectus eos, eaque quo error.
      </p>}
      <div>{url}</div>
      <hr className={styled.br} />
    </div>
   );
}
 
export default TarjetaProyecto;
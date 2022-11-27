import styled from "./TarjetaProyecto.module.css"
const TarjetaProyecto = ({title,img,figcaption,description,url}) => {

  return ( 
    <>
    <div className={styled.boxTarjeta}>
      <figure className={styled.figure}>
        <img className={styled.img} src={img} alt="" />
      </figure>
      <div className={styled.description}>
      <h3 className={styled.h3}>{title.toUpperCase()}</h3>
       <p className={styled.p}>
        {description.uno || "  "}
      </p>
       <p className={styled.p}>
        {description.dos || "  "}
      </p>
       <p className={styled.p}>
        {description.tres || "  "}
      </p>

        <button className={styled.btnProyecto}>
        <a href={url} target="_blank" className={styled.linkProyecto}>ver proyecto</a>
        </button> 
      </div>

    </div>
      <hr className={styled.br} />
      </>
   );
}
 
export default TarjetaProyecto;
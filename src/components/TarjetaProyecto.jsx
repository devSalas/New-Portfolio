import styled from "./TarjetaProyecto.module.css"
const TarjetaProyecto = ({title,img,description,url,codigo}) => {

  return ( 
    <>
    <div className={styled.boxTarjeta}>
      <figure className={styled.figure}>
       <a  href={url} target="_blank"> <img className={styled.img} src={img} alt="" /> </a>
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
        <a href={url} target="_blank" className={`${styled.linkProyecto} ${styled.linkProyectoUno}` }>ver proyecto</a>
        </button> 
        <button className={styled.btnGithub}>
        <a href={codigo} target="_blank" className={`${styled.linkProyecto} ${styled.linkProyectoDos}`}>codigo fuente</a>
        </button> 
      </div>

    </div>
      <hr className={styled.br} />
      </>
   );
}
 
export default TarjetaProyecto;
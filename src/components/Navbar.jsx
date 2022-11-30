import {useState,useRef} from 'react'
import styled from './Navbar.module.css'
const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  let isActiveMenu=useRef('');

  const handleClick=()=>{

      if(isActiveMenu.current.matches(`.${styled.none}`)){

        isActiveMenu.current.classList.remove(styled.none)

      }else{
        isActiveMenu.current.classList.add(styled.ocultarMenuLujoso)

        setTimeout(()=>{
          isActiveMenu.current.classList.add(styled.none)

          isActiveMenu.current.classList.remove(styled.ocultarMenuLujoso)
        },400)

      }
      
    }
  return ( 
    <header className={styled.header}  >
      <h1 className="animate__animated animate__bounce">EstebanDev</h1>
      
      <div  ref={isActiveMenu}  className={`${styled.headerMenu} ${styled.none}`}>
        <a onClick={handleClick} className={styled.a}  href="#tAcerca">Acerca</a>
        <a onClick={handleClick} className={styled.a} href="#skills">skills</a>
        <a onClick={handleClick} className={styled.a} href="#proyectos">Proyectos</a>
        <a onClick={handleClick} className={styled.a} href="#contacto">contacto</a>
      </div>
      <div className={styled.NavbarDesktop}   >
        <a  className={styled.ad}  href="#tAcerca">Acerca</a>
        <a  className={styled.ad} href="#skills">skills</a>
        <a  className={styled.ad} href="#proyectos">Proyectos</a>
        <a  className={styled.ad} href="#contacto">contacto</a>
      </div>
      
      <div className={styled.boxMenu} >
        <img  className={styled.btnMenu} src="./menu.svg" alt="" onClick={handleClick}/>
      </div>
    </header>
   );
}
 
export default Navbar;
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
        },500)

      }
      
    }
  return ( 
    <header className={styled.header} id="acerca" >
      <h1>EstebanDev</h1>
      <div  ref={isActiveMenu}  className={`${styled.headerMenu} ${styled.none}`}>
        <a className={styled.a}  href="#acerca">Acerca</a>
        <a className={styled.a} href="#proyectos">Proyectos</a>
        <a className={styled.a} href="#skills">skills</a>
        <a className={styled.a} href="#contacto">contacto</a>
      </div>
      <div className={styled.boxMenu} >
        <img  className={styled.btnMenu} src="../../public/menu.svg" alt="" onClick={handleClick}/>
      </div>
    </header>
   );
}
 
export default Navbar;
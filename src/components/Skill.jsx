const Skill = ({img,lenguaje}) => {
  return ( 
    <figure class="skill_know">
    <img class={img} src="../../public/nodejs.png" alt="" />
    <figcaption>{lenguaje}</figcaption>
  </figure>
   );
}
 
export default Skill
;
import styles from './ProjectStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
          <ProjectCard 
            src={viberr} 
            link="https://github.com/AlchimistCode2/Graphic-Design1"
            h3="Flyer Design"
            p="Training Flyer"
          />

          <ProjectCard 
            src={freshBurger} 
            link="https://www.figma.com/proto/qWYQwVMGgGL1nQ18ywUN4Q/Based-gender-violence-Web-site?node-id=3-25&p=f&t=VEyxAJLaM6pVVklf-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
            h3="Web design UI/X"
            p="Ending gender violence based"
          />  

         <ProjectCard 
            src={hipsster} 
            link="https://github.com/AlchimistCode2/Graphic-Design1"
            h3="Squadesign logo"
            p="Logo design"
          />

          <ProjectCard 
            src={fitLift} 
            link="https://github.com/AlchimistCode2/Ghislain_koula1"
            h3="Portfolio"
            p="Personnal portfolio"
          />  
        </div>
    </section>
  )
}

export default Projects
import styles from './ProjectStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import logoRealisation1 from '../../assets/logo-realisation1.png';
import Banquier from '../../assets/Banquier.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className={styles.sectionTitle}>Projects</h1>
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
          h3="Web design UI/UX"
          p="Ending gender violence based"
        />  

        <ProjectCard 
          src={logoRealisation1} 
          link="https://www.figma.com/proto/qWYQwVMGgGL1nQ18ywUN4Q/Based-gender-violence-Web-site?node-id=3-25&p=f&t=VEyxAJLaM6pVVklf-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
          h3="Municipality's logo proposal"
          p="Dynamic design for N'Djamena city Municipality"
        />  

        <ProjectCard 
          src={Banquier} 
          link="https://www.figma.com/proto/qWYQwVMGgGL1nQ18ywUN4Q/Based-gender-violence-Web-site?node-id=3-25&p=f&t=VEyxAJLaM6pVVklf-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
          h3="Logo competition"
          p="The logo competition was launched by Réussir Begou"
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
          p="Personal portfolio"
        />  
      </div>
    </section>
  )
}

export default Projects;

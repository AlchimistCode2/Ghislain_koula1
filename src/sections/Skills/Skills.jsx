import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.SkillsList}>
            <SkillList src={checkMarkIcon} skill="HTML"/>
            <SkillList src={checkMarkIcon} skill="CSS"/>
            <SkillList src={checkMarkIcon} skill="JavaScript"/>
            <SkillList src={checkMarkIcon} skill="TypeScript"/>
            <SkillList src={checkMarkIcon} skill="Node"/>
            <SkillList src={checkMarkIcon} skill="React"/>
        </div>
        <hr />
        <div className={styles.SkillsList}>
            <SkillList src={checkMarkIcon} skill="MySQL"/>
            <SkillList src={checkMarkIcon} skill="MongoDB"/>
            <SkillList src={checkMarkIcon} skill="Access"/>
            <SkillList src={checkMarkIcon} skill="Bootstrap"/>
        </div>
        <hr />
        <div className={styles.SkillsList}>
            <SkillList src={checkMarkIcon} skill="Photoshop"/>
            <SkillList src={checkMarkIcon} skill="Illustrator"/>
            <SkillList src={checkMarkIcon} skill="MS Office(Project,Word, Excel,PowerBI...)"/>
            <SkillList src={checkMarkIcon} skill="Kobocollect/Kobotoolbox"/>
            <SkillList src={checkMarkIcon} skill="Design UI/X"/>
        </div>
        
    </section>
  )
}
export default Skills
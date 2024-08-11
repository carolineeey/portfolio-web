import styles from './skillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

export default function skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            <SkillList src={checkMarkIcon} skill="Javascript" />
            <SkillList src={checkMarkIcon} skill="Dart" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Python" />
            <SkillList src={checkMarkIcon} skill="Go" />
            <SkillList src={checkMarkIcon} skill="C" />
            <SkillList src={checkMarkIcon} skill="Lua" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="RESTful API" />
            <SkillList src={checkMarkIcon} skill="Microservice" />
            <SkillList src={checkMarkIcon} skill="Database" />
            <SkillList src={checkMarkIcon} skill="Git" />
        </div>
    </section>
  )
}

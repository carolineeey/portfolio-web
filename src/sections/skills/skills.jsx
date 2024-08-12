import styles from './skillsStyles.module.css'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList'
import { useTheme } from '../../common/ThemeContext';

export default function skills() {
  const { theme, toggleTheme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

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

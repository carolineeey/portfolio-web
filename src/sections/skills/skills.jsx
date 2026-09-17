import styles from './skillsStyles.module.css'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList'
import { useTheme } from '../../common/ThemeContext';

const skillGroups = [
  { title: 'Web & Mobile', skills: ['HTML', 'CSS', 'Javascript', 'Dart'] },
  { title: 'Languages', skills: ['Python', 'Go', 'C', 'Lua'] },
  { title: 'Backend & Tools', skills: ['RESTful API', 'Microservice', 'Database', 'Git'] },
];

export default function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills">
        <div className="sectionHeader">
            <span className="eyebrow">What I work with</span>
            <h2>Skills</h2>
        </div>
        <div className={styles.groups}>
            {skillGroups.map(({ title, skills }) => (
                <div key={title} className={styles.group}>
                    <h3>{title}</h3>
                    <div className={styles.skillList}>
                        {skills.map((skill) => (
                            <SkillList key={skill} src={checkMarkIcon} skill={skill} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

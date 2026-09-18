import styles from './skillsStyles.module.css'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList'
import { useTheme } from '../../common/ThemeContext';

const skillGroups = [
  { title: 'Security & R&D', skills: ['Frida', 'Fraud Pattern Analysis', 'Mobile Security', 'OTP Security', 'Device Fingerprinting'] },
  { title: 'Languages', skills: ['Go', 'JavaScript', 'Dart', 'Python', 'HTML/CSS', 'C#', 'Lua'] },
  { title: 'Frameworks', skills: ['Gorilla Mux', 'Vue.js', 'React Native', 'Node.js'] },
  { title: 'Backend & Development', skills: ['RESTful APIs', 'Microservices', 'SQL', 'Unit & Integration Testing'] },
  { title: 'Infrastructure', skills: ['Docker', 'Nomad', 'Linux', 'Git'] },
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

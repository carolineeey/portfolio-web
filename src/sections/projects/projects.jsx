import styles from './projectsStyle.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import codingBee from '../../assets/codingbee.png';
import bmiChecker from '../../assets/bmi-checker.png';
import ProjectCard from '../../common/ProjectCard';

// TODO: fill in year and description for the older projects.
const projectList = [
    {
        src: codingBee,
        link: 'https://cba-web-seven.vercel.app/',
        h3: 'Coding Bee Academy',
        p: 'Company Profile',
        year: '2022',
        description: 'Company profile website for Coding Bee Academy, built with HTML, CSS and JavaScript as the final submission of its Web Development Training.',
    },
    {
        src: bmiChecker,
        link: 'https://bmi-checker-delta.vercel.app/',
        h3: 'BMI Checker',
        p: 'Health Calculator',
        year: '2020',
        description: 'Informational website about Body Mass Index with a built-in BMI calculator, made as a submission for a Dicoding course.',
    },
    { src: viberr, link: 'https://github.com/', h3: 'Viberr', p: 'Streaming App' },
    { src: freshBurger, link: 'https://github.com/', h3: 'Fresh Burger', p: 'Hamburger Restaurant' },
    { src: hipsster, link: 'https://github.com/', h3: 'Hipsster', p: 'Glasses shop' },
    { src: fitLift, link: 'https://github.com/', h3: 'FitLift', p: 'Fitness App' },
];

function projects() {
  return (
    <section id="projects">
        <div className="sectionHeader">
            <span className="eyebrow">Selected work</span>
            <h2>Projects</h2>
        </div>
        <div className={styles.projectsContainer}>
            {projectList.map((project) => (
                <ProjectCard key={project.h3} {...project} />
            ))}
        </div>
    </section>

  )
}

export default projects

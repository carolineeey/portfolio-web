import styles from './profileStyles.module.css';
import profileImg from '../../assets/prf.png';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

// First developer role (PotatoBeans internship), used to keep the years of experience current.
const CAREER_START = new Date(2023, 7, 1); // August 2023

function yearsSince(start) {
    const now = new Date();
    let years = now.getFullYear() - start.getFullYear();
    if (now.getMonth() < start.getMonth()) years -= 1;
    return years;
}

function Profile() {
    const { theme } = useTheme();

    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
        <section id="profile" className={styles.container}>
            <div className={styles.imageWrapper}>
                <img
                    className={styles.profileImg}
                    src={profileImg}
                    alt="Esther's profile picture"
                />
            </div>
            <div className={styles.info}>
                <span className="eyebrow">Hi, I&apos;m</span>
                <h1>Esther Melia</h1>
                <h2 className={styles.role}>Software Developer</h2>
                <p className={styles.description}>
                    {yearsSince(CAREER_START)}+ years of software development experience.
                    Currently building an authentication platform in Go, focusing on fraud prevention and mobile security.
                </p>
                <div className={styles.actions}>
                    <a className="btn" href={CV} download>
                        Download Resume
                    </a>
                    <div className={styles.socials}>
                        <a href="https://github.com/carolineeey?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <img src={githubIcon} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/esther-melia-cs" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <img src={linkedinIcon} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;

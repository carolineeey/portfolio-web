import styles from './profileStyles.module.css';
import profileImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';
import twitterIcon from '../../assets/twitter-light.svg';
import githubIcon from '../../assets/github-light.svg';
import linkedinIcon from '../../assets/linkedin-light.svg';
import CV from '../../assets/CV.pdf';
import { useTheme } from '../../common/ThemeContext';

function Profile() {
    const { theme, toggleTheme } = useTheme();
    return (
        <section id="profile" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img 
                    className={styles.Profile} 
                    src={profileImg} 
                    alt="Esther's profile picture"
                />
                <img 
                    className={styles.colorMode}
                    src={themeIcon}
                    alt="Color mode icon"
                    onClick={toggleTheme}
                />
            </div>
            <div className={styles.info}>
                <h1>
                    Esther <br />Melia
                </h1>
                <h2>Software Engineer</h2>
                <span>
                    <a href="https://twitter.com" target="_blank">
                        <img src={twitterIcon} alt="Twitter Icon" />
                    </a>
                    <a href="https://github.com" target="_blank">
                        <img src={githubIcon} alt="Github Icon" />
                    </a>
                    <a href="https://linkedin.com" target="_blank">
                        <img src={linkedinIcon} alt="Linkedin Icon" />
                    </a>
                </span>
                <p>With a pasion for developing modern web apps</p>
                <a href={CV} download>
                    <button className="hover">
                        Resume
                    </button>
                </a>
            </div>
        </section>
    );
}

export default Profile;
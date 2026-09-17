import styles from './profileStyles.module.css';
import profileImg from '../../assets/prf.png';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Profile() {
    const { theme } = useTheme();

    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
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
                <h2 className={styles.role}>Software Engineer</h2>
                <p className={styles.description}>
                    With a passion for developing modern web apps
                </p>
                <div className={styles.actions}>
                    <a className="btn" href={CV} download>
                        Download Resume
                    </a>
                    <div className={styles.socials}>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <img src={twitterIcon} alt="" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <img src={githubIcon} alt="" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <img src={linkedinIcon} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;

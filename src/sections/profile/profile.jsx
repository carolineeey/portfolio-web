import styles from './profileStyles.module.css';
import profileImg from '../../assets/profile.png';
import themeIcon from '../../assets/sun.svg';

function Profile() {
    return (
        <section id="profile">
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
                />
            </div>
        </section>
    );
}

export default Profile;
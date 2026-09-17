import styles from './navbarStyles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import { useTheme } from '../../common/ThemeContext';

function Navbar() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a href="#profile" className={styles.brand}>EM</a>
                <div className={styles.actions}>
                    <ul className={styles.links}>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <button
                        type="button"
                        className={styles.themeToggle}
                        onClick={toggleTheme}
                        aria-label={`Switch to ${nextTheme} mode`}
                    >
                        <img src={themeIcon} alt="" />
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;

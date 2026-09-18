import styles from './footerStyles.module.css';

function footer() {
  return (
    <footer id="footer" className={styles.container}>
        <p>
            &copy; {new Date().getFullYear()} Esther Melia Caroline Sigalingging. <br />
            All rights reserved.
        </p>
    </footer>
  )
}

export default footer
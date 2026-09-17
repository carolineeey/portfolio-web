import styles from './projectCardStyles.module.css';

export default function ProjectCard({ src, link, h3, p }) {
  return (
    <a className={styles.card} href={link} target="_blank" rel="noopener noreferrer">
        <div className={styles.media}>
            <img src={src} alt={`${h3} logo`}/>
        </div>
        <div className={styles.body}>
            <h3>{h3}</h3>
            <p>{p}</p>
        </div>
        <span className={styles.arrow} aria-hidden="true">&#8599;</span>
    </a>
  )
}

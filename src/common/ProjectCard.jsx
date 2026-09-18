import styles from './projectCardStyles.module.css';

export default function ProjectCard({ src, link, h3, p, year, description }) {
  return (
    <a className={styles.card} href={link} target="_blank" rel="noopener noreferrer">
        <div className={styles.media}>
            <img src={src} alt={`${h3} logo`}/>
        </div>
        <div className={styles.body}>
            <div className={styles.meta}>
                <span>{p}</span>
                {year && <span className={styles.year}>{year}</span>}
            </div>
            <h3>{h3}</h3>
            {description && <p className={styles.description}>{description}</p>}
        </div>
        <span className={styles.arrow} aria-hidden="true">&#8599;</span>
    </a>
  )
}

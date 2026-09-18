import styles from './experienceStyles.module.css';

const jobs = [
  {
    role: 'Software Developer',
    company: 'Fazpass',
    period: 'Nov 2024 – Present',
    summary: 'Indonesian authentication platform covering OTP, network authentication and mobile security.',
    points: [
      'Research emerging fraud patterns and attack vectors in the R&D division to improve products and detection.',
      'Develop and maintain OTP authentication and aggregator infrastructure in Go, with frontend work in Vue.js, built for high availability and fault-tolerant delivery across channels.',
      'Contribute to Keypaz, a mobile security SDK, implementing device integrity checks and signals that flag compromised or suspicious devices.',
      'Build authentication logic and trust-score-based fallback flows for FNA (Fazpass Network Authentication) across the merchant network.',
    ],
    stack: ['Go', 'Vue.js', 'Microservices', 'Mobile Security'],
  },
  {
    role: 'Software Developer',
    company: 'PotatoBeans Company',
    period: 'Oct 2023 – Nov 2024',
    summary: 'IT solution provider focused on enterprise digital transformation.',
    points: [
      'Built backend services in Go and frontends in Dart for client products, including a quality assurance system for Institut Teknologi Bandung (ITB) and a game voucher platform.',
      "Improved API response time and data consistency across highly relational, multi-database data for ITB's SPMI system.",
      'Refactored the voucher platform core for a new business model, fixed a critical payment failure, and helped launch a reseller sub-platform.',
    ],
    stack: ['Go', 'Dart', 'SQL', 'CI/CD'],
  },
  {
    role: 'Software Developer Intern',
    company: 'PotatoBeans Company',
    period: 'Aug 2023 – Oct 2023',
    points: [
      'Shipped production code in Go and Dart alongside senior engineers.',
      'Took part in feature design discussions and code reviews.',
    ],
    stack: ['Go', 'Dart'],
  },
  {
    role: 'Coding Teacher',
    company: 'Coding Bee Academy',
    period: 'Aug 2021 – Aug 2023',
    points: [
      'Planned and taught coding lessons to students aged 5–18 across different skill levels.',
      'Taught Python, JavaScript, HTML/CSS, Lua, C# and React Native, adapting materials to each student.',
    ],
    stack: ['Python', 'JavaScript', 'Lua', 'C#'],
  },
];

export default function Experience() {
  return (
    <section id="experience">
        <div className="sectionHeader">
            <span className="eyebrow">Where I&apos;ve worked</span>
            <h2>Experience</h2>
        </div>
        <ol className={styles.timeline}>
            {jobs.map((job) => (
                <li key={`${job.company}-${job.role}`} className={styles.item}>
                    <span className={styles.period}>{job.period}</span>
                    <div className={styles.card}>
                        <h3>{job.role}</h3>
                        <span className={styles.company}>{job.company}</span>
                        {job.summary && <p className={styles.summary}>{job.summary}</p>}
                        <ul className={styles.points}>
                            {job.points.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                        <div className={styles.stack}>
                            {job.stack.map((tech) => (
                                <span key={tech}>{tech}</span>
                            ))}
                        </div>
                    </div>
                </li>
            ))}
        </ol>
    </section>
  )
}

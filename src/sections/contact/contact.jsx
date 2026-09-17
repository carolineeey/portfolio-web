import styles from './contactStyles.module.css';

function contact() {
  return (
    <section id="contact" className={styles.container}>
        <div className="sectionHeader">
            <span className="eyebrow">Get in touch</span>
            <h2>Contact</h2>
            <p>Have a project in mind or just want to say hi? Send me a message.</p>
        </div>
        <form className={styles.form} action="https://formspree.io/f/mrbzkykl" method="post">
            <div className={styles.row}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your name"
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="you@example.com"
                        required
                    />
                </div>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Tell me about your project"
                    required></textarea>
            </div>
            <button className={`btn ${styles.submit}`} type="submit">Send message</button>
        </form>
    </section>
  )
}

export default contact;

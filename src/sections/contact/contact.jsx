import { useState } from 'react';
import styles from './contactStyles.module.css';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';

const EMAIL = 'esthermelia20@gmail.com';
const FORM_ENDPOINT = 'https://formspree.io/f/mrbzkykl';

const MailIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
    </svg>
);

const PinIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
        <circle cx="12" cy="9.5" r="2.5" />
    </svg>
);

function Contact() {
    const { theme } = useTheme();
    // idle | sending | success | error
    const [status, setStatus] = useState('idle');
    const [copied, setCopied] = useState(false);

    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard can be blocked; the mailto link still works.
        }
    };

    // Submit in the background so visitors stay on the page.
    // Without JavaScript the form still posts to Formspree normally.
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        setStatus('sending');

        try {
            const response = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                body: new FormData(form),
                headers: { Accept: 'application/json' },
            });
            if (!response.ok) throw new Error(`Formspree responded ${response.status}`);
            form.reset();
            setStatus('success');
        } catch {
            setStatus('error');
        }
    };

    return (
        <section id="contact">
            <div className="sectionHeader">
                <span className="eyebrow">Get in touch</span>
                <h2>Let&apos;s work together</h2>
            </div>
            <div className={styles.layout}>
                <div className={styles.info}>
                    <p className={styles.intro}>
                        Have an opportunity, a project in mind, or just want to say hi?
                        Send me a message and I&apos;ll get back to you as soon as I can.
                    </p>

                    <div className={styles.emailCard}>
                        <span className={styles.iconBox}><MailIcon /></span>
                        <div className={styles.emailText}>
                            <span className={styles.label}>Email</span>
                            {/* Let narrow screens wrap the address after the @. */}
                            <a href={`mailto:${EMAIL}`}>{EMAIL.replace(/@.*/, '')}@<wbr />{EMAIL.replace(/.*@/, '')}</a>
                        </div>
                        <button type="button" className={styles.copy} onClick={copyEmail}>
                            {copied ? 'Copied!' : 'Copy'}
                        </button>
                    </div>

                    <ul className={styles.channels}>
                        <li>
                            <a href="https://www.linkedin.com/in/esther-melia-cs/" target="_blank" rel="noopener noreferrer">
                                <span className={styles.iconBox}><img src={linkedinIcon} alt="" /></span>
                                <span>
                                    <span className={styles.label}>LinkedIn</span>
                                    esther-melia-cs
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/carolineeey" target="_blank" rel="noopener noreferrer">
                                <span className={styles.iconBox}><img src={githubIcon} alt="" /></span>
                                <span>
                                    <span className={styles.label}>GitHub</span>
                                    carolineeey
                                </span>
                            </a>
                        </li>
                        <li>
                            <div>
                                <span className={styles.iconBox}><PinIcon /></span>
                                <span>
                                    <span className={styles.label}>Location</span>
                                    Jakarta, Indonesia
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>

                <form className={styles.form} action={FORM_ENDPOINT} method="post" onSubmit={handleSubmit}>
                    <div className={styles.row}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Your name"
                                autoComplete="name"
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
                                autoComplete="email"
                                required
                            />
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Tell me about your project or opportunity"
                            required></textarea>
                    </div>
                    <div className={styles.footer}>
                        <button className="btn" type="submit" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending…' : 'Send message'}
                        </button>
                        <p className={styles.status} role="status" data-status={status}>
                            {status === 'success' && 'Thanks! Your message has been sent.'}
                            {status === 'error' && (
                                <>Something went wrong. Please try again or email me at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</>
                            )}
                        </p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;

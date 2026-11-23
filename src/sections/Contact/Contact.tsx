import * as styles from './Contact.module.scss';

export function Contact() {
  return (
    <section className={styles.contact} id="contact" aria-labelledby="contact-heading">
      <div>
        <h2 className={styles.heading} id="contact-heading">Let's Work Together</h2>
        <p className={styles.description}>
          I'm currently looking for a remote Junior Frontend Developer opportunity.
          If you think I could be a good fit for your team, I'd be happy to connect.
        </p>
        <a className={styles.emailButton} href="mailto:natalydiach@gmail.com">
          Send me an email <span aria-hidden="true">↗</span>
        </a>
      </div>
      <address className={styles.details} aria-label="Contact information">
        <ul>
          <li>
            <a href="mailto:natalydiach@gmail.com">natalydiach@gmail.com</a>
          </li>
          <li>
            <a href="https://linkedin.com/in/natalia-diachenko-507048a8/"
              target="_blank" rel="noopener noreferrer"
              aria-label="Natalia Diachenko on LinkedIn (opens in a new tab)">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/KonnyDaugh"
              target="_blank" rel="noopener noreferrer"
              aria-label="Natalia Diachenko on GitHub (opens in a new tab)">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>
      </address>
    </section>
  );
}

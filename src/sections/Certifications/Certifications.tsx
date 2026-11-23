import * as styles from './Certifications.module.scss';

export function Certifications() {
  return (
    <section className={styles.certifications} id="certifications" aria-labelledby="certifications-heading">
      <h2 className={styles.heading} id="certifications-heading">Certifications</h2>
      <article className={styles.certificate} aria-labelledby="campfire-certificate-heading">
        <h3 id="campfire-certificate-heading">Campfire School</h3>
        <p className={styles.course}>Bootcamp Middle Frontend + AI</p>
        <p className={styles.details}>Certificate of Completion · Natalia Diachenko</p>
        <p className={styles.details}>
          Completed <time dateTime="2026-11-20">November 20, 2026</time>
        </p>
        <a
          className={styles.link}
          href="/certificates/campfire-frontend-certificate.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Certificate from Campfire School (PDF, opens in a new tab)"
        >
          View Certificate
        </a>
      </article>
    </section>
  );
}

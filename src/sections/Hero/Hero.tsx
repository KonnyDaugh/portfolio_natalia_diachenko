import { DownloadCv } from '../../components/DownloadCv/DownloadCv';
import * as styles from './Hero.module.scss';

const profileImage = new URL('../../assets/images/profile.webp', import.meta.url).href;

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/KonnyDaugh' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/natalia-diachenko-507048a8/' },
];

export function Hero() {
  return (
    <section className={styles.hero} id="home" aria-labelledby="hero-heading">
      <div className={styles.intro}>
        <p className={styles.availability}>
          <span aria-hidden="true" />Open to remote opportunities
        </p>
        <h1 id="hero-heading">Hi, I&apos;m Natalia.</h1>
        <p className={styles.role}>Junior Frontend Developer</p>
      </div>
      <div className={styles.portrait}>
        <img
          className={styles.portraitImage}
          src={profileImage}
          alt="Portrait of Natalia Diachenko"
          width={800}
          height={800}
        />
      </div>
      <div className={styles.details}>
        <p className={styles.description}>
          I build responsive, accessible web interfaces using React, TypeScript,
          and modern frontend technologies.
        </p>
        <div className={styles.actions}>
          <a className={styles.projectsButton} href="#projects">
            View My Projects <span aria-hidden="true">↗</span>
          </a>
          <DownloadCv />
        </div>
        <p className={styles.note} id="projects-note">CV coming soon.</p>
        <ul className={styles.socialLinks} aria-label="Social profiles">
          {socialLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {label} <span aria-hidden="true">↗</span>
                <span className={styles.srOnly}> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

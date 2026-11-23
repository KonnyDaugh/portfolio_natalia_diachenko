import * as styles from './Footer.module.scss';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <p className={styles.name}>Natalia Diachenko</p>
          <p className={styles.role}>Junior Frontend Developer</p>
        </div>
        <p className={styles.copyright}>© {currentYear} Natalia Diachenko</p>
      </div>
    </footer>
  );
}

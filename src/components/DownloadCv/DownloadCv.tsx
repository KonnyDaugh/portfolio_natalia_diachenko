import * as styles from './DownloadCv.module.scss';

export function DownloadCv() {
  return (
    <a
      className={styles.button}
      href="/resume/Natalia_Diachenko_CV.pdf"
      download="Natalia_Diachenko_CV.pdf"
      aria-label="Download CV (PDF)"
    >
      Download CV <span className={styles.note}>(PDF)</span>
    </a>
  );
}

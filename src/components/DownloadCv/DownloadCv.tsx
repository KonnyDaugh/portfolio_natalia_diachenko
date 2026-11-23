import * as styles from './DownloadCv.module.scss';

export function DownloadCv() {
  return (
    <button className={styles.button} type="button" disabled title="CV coming soon">
      Download CV <span className={styles.note}>(soon)</span>
    </button>
  );
}

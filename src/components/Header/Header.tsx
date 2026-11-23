import { useRef, useState } from 'react';
import { DownloadCv } from '../DownloadCv/DownloadCv';
import * as styles from './Header.module.scss';

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <header className={styles.header}>
      <div
        className={styles.inner}
        onKeyDown={(event) => {
          if (event.key === 'Escape' && isMenuOpen) {
            setIsMenuOpen(false);
            menuButtonRef.current?.focus();
          }
        }}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setIsMenuOpen(false);
          }
        }}
      >
        <a className={styles.logo} href="#home" onClick={() => setIsMenuOpen(false)}>
          Natalia Diachenko<span aria-hidden="true">.</span>
        </a>
        <button
          className={styles.menuButton}
          ref={menuButtonRef}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
          <span className={styles.menuIcon} aria-hidden="true">{isMenuOpen ? '×' : '☰'}</span>
        </button>
        <nav
          id="primary-navigation"
          aria-label="Primary navigation"
          className={`${styles.navigation} ${isMenuOpen ? styles.open : ''}`}
        >
          <ul className={styles.links}>
            {navigation.map(({ label, href }) => (
              <li key={href}>
                {/* Включить ссылку после реализации соответствующей секции. */}
                <a href={href} aria-disabled="true" title={`${label} — coming soon`}
                  onClick={(event) => event.preventDefault()}>
                  {label}<span className={styles.srOnly}> (coming soon)</span>
                </a>
              </li>
            ))}
          </ul>
          <DownloadCv />
        </nav>
      </div>
    </header>
  );
}

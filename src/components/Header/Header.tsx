import { useRef, useState } from 'react';
import { DownloadCv } from '../DownloadCv/DownloadCv';
import * as styles from './Header.module.scss';

const navigation = [
  { label: 'About', href: '#about', disabled: false },
  { label: 'Skills', href: '#skills', disabled: false },
  { label: 'Projects', href: '#projects', disabled: false },
  { label: 'Contact', href: '#contact', disabled: true },
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
            {navigation.map(({ label, href, disabled }) => (
              <li key={href}>
                {/* Включить ссылку после реализации соответствующей секции. */}
                <a href={href} aria-disabled={disabled || undefined}
                  title={disabled ? `${label} — coming soon` : undefined}
                  onClick={(event) => {
                    if (disabled) {
                      event.preventDefault();
                    } else {
                      setIsMenuOpen(false);
                    }
                  }}>
                  {label}{disabled && <span className={styles.srOnly}> (coming soon)</span>}
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

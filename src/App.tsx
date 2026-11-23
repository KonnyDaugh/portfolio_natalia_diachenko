import * as styles from './App.module.scss';
import { Header } from './components/Header/Header';
import { Hero } from './sections/Hero/Hero';

export function App() {
  return (
    <>
      <a className={styles.skipLink} href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
      </main>
    </>
  );
}

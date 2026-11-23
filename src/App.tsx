import * as styles from './App.module.scss';
import { Header } from './components/Header/Header';
import { Hero } from './sections/Hero/Hero';
import { About } from './sections/About/About';
import { Skills } from './sections/Skills/Skills';
import { Projects } from './sections/Projects/Projects';
import { Certifications } from './sections/Certifications/Certifications';
import { Contact } from './sections/Contact/Contact';
import { Footer } from './components/Footer/Footer';

export function App() {
  return (
    <>
      <a className={styles.skipLink} href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

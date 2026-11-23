import * as styles from './About.module.scss';

export function About() {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-heading">
      <h2 className={styles.heading} id="about-heading">About Me</h2>
      <div className={styles.content}>
        <p>
          I'm a Junior Frontend Developer focused on building responsive,
          user-friendly web applications with React and TypeScript.
        </p>
        <p>
          I've worked on real-world projects, including websites for a family
          music band and a local orchestra, as well as a collaborative frontend
          application.
        </p>
        <p>
          I enjoy turning designs into functional interfaces, working with APIs,
          and improving my skills through practical development.
        </p>
        <p>
          I'm currently looking for a remote Junior Frontend Developer position
          where I can contribute to a team and continue growing professionally.
        </p>
      </div>
    </section>
  );
}

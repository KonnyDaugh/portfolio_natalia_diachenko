import * as styles from './Skills.module.scss';

interface Technology {
  name: string;
  icon?: string;
}

interface SkillCategory {
  id: string;
  title: string;
  technologies: readonly Technology[];
}

const categories: readonly SkillCategory[] = [
  {
    id: 'core',
    title: 'Core',
    technologies: [
      { name: 'HTML5', icon: new URL('../../icons/html-icon.svg', import.meta.url).href },
      { name: 'CSS3', icon: new URL('../../icons/css-icon.svg', import.meta.url).href },
      { name: 'JavaScript', icon: new URL('../../icons/javascript-icon.svg', import.meta.url).href },
      { name: 'TypeScript' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    technologies: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'React Router' },
      { name: 'TanStack Query' },
    ],
  },
  {
    id: 'styling',
    title: 'Styling & Animation',
    technologies: [
      { name: 'SCSS', icon: new URL('../../icons/sass-icon.svg', import.meta.url).href },
      { name: 'CSS Modules' },
      { name: 'Tailwind CSS' },
      { name: 'GSAP' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Workflow',
    technologies: [
      { name: 'Git' },
      { name: 'GitHub', icon: new URL('../../icons/github-icon.svg', import.meta.url).href },
      { name: 'Figma', icon: new URL('../../icons/figma.svg', import.meta.url).href },
      { name: 'REST API' },
      { name: 'AI-assisted Development' },
    ],
  },
];

export function Skills() {
  return (
    <section className={styles.skills} id="skills" aria-labelledby="skills-heading">
      <h2 className={styles.heading} id="skills-heading">Tech Stack</h2>
      <ul className={styles.cards}>
        {categories.map(({ id, title, technologies }) => (
          <li className={styles.card} key={id}>
            <h3>{title}</h3>
            <ul className={styles.badges}>
              {technologies.map(({ name, icon }) => (
                <li className={styles.badge} key={name}>
                  {icon && <img src={icon} width={18} height={18} alt="" />}
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

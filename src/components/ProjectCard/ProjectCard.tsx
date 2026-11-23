import * as styles from './ProjectCard.module.scss';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: readonly string[];
  githubUrl: string;
  status?: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  liveDemoUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { id, title, subtitle, description, technologies, githubUrl, status, image, liveDemoUrl } = project;

  return (
    <article
      className={`${styles.card} ${image ? styles.withImage : ''}`}
      aria-labelledby={`${id}-heading`}
    >
      {image && (
        <div className={styles.preview}>
          <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.titleRow}>
          <h3 id={`${id}-heading`}>{title}</h3>
          {status && <span className={styles.status}>{status}</span>}
        </div>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.description}>{description}</p>
        <ul className={styles.technologies} aria-label="Technologies">
          {technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <div className={styles.links}>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer"
            aria-label={`${title} on GitHub (opens in a new tab)`}>
            GitHub <span aria-hidden="true">↗</span>
          </a>
          {liveDemoUrl && (
            <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer"
              aria-label={`${title}: Live Demo (opens in a new tab)`}>
              Live Demo <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

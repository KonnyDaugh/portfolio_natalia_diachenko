import { ProjectCard, type Project } from '../../components/ProjectCard/ProjectCard';
import * as styles from './Projects.module.scss';

const projects: readonly Project[] = [
  {
    id: 'sunny-family-band',
    title: 'Sunny Family Band',
    subtitle: 'Family Music Band Website',
    description: 'A responsive, multilingual website for a family music band, featuring music and video content, performance programs, and a booking form.',
    technologies: ['Next.js', 'React', 'TypeScript', 'SCSS', 'Tailwind CSS'],
    githubUrl: 'https://github.com/KonnyDaugh/sunny-family-band-v2',
    status: 'In development',
    image: {
      src: new URL('../../assets/images/projects/sunny-family-band.webp', import.meta.url).href,
      alt: 'Sunny Family Band v2 homepage with the band portrait and booking links',
      width: 2779,
      height: 1456,
    },
  },
  {
    id: 'cpa-frontend',
    title: 'CPA Frontend',
    subtitle: 'Collaborative Frontend Application',
    description: 'A collaborative frontend project involving reusable React components, API integration, routing, and team-based development workflows.',
    technologies: ['React', 'TypeScript', 'SCSS Modules', 'TanStack Query', 'React Router'],
    githubUrl: 'https://github.com/KonnyDaugh/cpa-frontend',
    githubLabel: 'GitHub Repository',
    requestAccessUrl: 'mailto:natalydiach@gmail.com?subject=CPA%20Frontend%20Access%20Request',
    status: 'Private Team Project',
    accessNote: 'This repository is private and requires access approval. The GitHub link works only for authorized visitors. Use Request Access to request access by email.',
  },
  {
    id: 'hgd-stjepan-radic',
    title: 'HGD Stjepan Radić',
    subtitle: 'Orchestra Website',
    description: 'A responsive website for a local orchestra, featuring its history, organizational information, an archive, and media content.',
    technologies: ['Next.js', 'React', 'TypeScript'],
    githubUrl: 'https://github.com/KonnyDaugh/hgd-stjepan-radic-website',
    image: {
      src: new URL('../../assets/images/projects/hgd-stjepan-radic.webp', import.meta.url).href,
      alt: 'HGD Stjepan Radić homepage featuring the orchestra',
      width: 1200,
      height: 750,
    },
  },
];

export function Projects() {
  return (
    <section className={styles.projects} id="projects" aria-labelledby="projects-heading">
      <h2 className={styles.heading} id="projects-heading">Featured Projects</h2>
      <p className={styles.introduction}>
        A selection of projects I've built independently and as part of a development team.
      </p>
      <div className={styles.cards}>
        {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </section>
  );
}

import { projects } from '@/lib/data';
import SectionHeader from './ui/SectionHeader';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="section-py bg-section-white section-divider" aria-label="Featured Projects">
      <div className="container-fluid">
        <SectionHeader
          eyebrow="Portfolio Projects"
          title="Featured"
          titleHighlight="Engineering Work"
          subtitle="Real-world AI systems and full-stack web applications developed with modern frameworks and robust architectures."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

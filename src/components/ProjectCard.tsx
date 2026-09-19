import { Project } from '@/lib/types';
import Card from './ui/Card';
import Badge from './ui/Badge';
import Button from './ui/Button';

interface ProjectCardProps {
  project: Project;
}

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      padding="none"
      className="w-full border border-slate-200 bg-white dark:bg-[#131c31] dark:border-slate-800 dark:hover:border-slate-700 hover:-translate-y-1.5 hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 rounded-2xl"
    >
      <div>
        {/* Header: Category & Date */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          {project.category && (
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700">
              {project.category}
            </span>
          )}
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            {project.period}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white hover:text-slate-700 dark:hover:text-slate-200 transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Tech Stack tags */}
        <div className="flex flex-wrap gap-2 my-4">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="neutral" size="sm">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Bullet Points */}
        <ul className="space-y-2.5 my-5">
          {project.points.map((pt, i) => (
            <li key={i} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 mt-2 flex-shrink-0" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer: Action links */}
      <div className="pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {project.liveUrl && (
            <Button
              as="a"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              variant="primary"
              size="sm"
              icon={<ExternalIcon />}
              iconPosition="right"
            >
              Live Demo
            </Button>
          )}

          {project.githubUrl && (
            <Button
              as="a"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              variant={project.liveUrl ? 'outline' : 'ghost'}
              size="sm"
              icon={<GithubIcon />}
              iconPosition="left"
            >
              Source Code
            </Button>
          )}
        </div>

        {project.liveUrl && (
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/70 px-2.5 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Live Deployment
          </span>
        )}
      </div>
    </Card>
  );
}

import { skillGroups } from '@/lib/data';
import SectionHeader from './ui/SectionHeader';
import SkillCard from './SkillCard';

export default function Skills() {
  return (
    <section id="skills" className="section-py bg-section-white section-divider" aria-label="Technical skills">
      <div className="container-fluid">
        <SectionHeader
          eyebrow="Technical Proficiencies"
          title="Skills &"
          titleHighlight="Technologies"
          subtitle="Core programming languages, AI & security workflows, full-stack web technologies, and developer tooling."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillGroups.map((group) => (
            <SkillCard key={group.category} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}

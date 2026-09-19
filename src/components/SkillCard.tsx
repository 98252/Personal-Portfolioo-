import { SkillGroup } from '@/lib/types';
import Card from './ui/Card';
import Badge from './ui/Badge';

interface SkillCardProps {
  group: SkillGroup;
}

const categoryIcons: Record<string, string> = {
  Languages: '⚡',
  'AI & Cybersecurity': '🧠',
  'Web Development': '🌐',
  Database: '🗄️',
  'Tools & Platforms': '🛠️',
  'UI/UX': '🎨',
};

export default function SkillCard({ group }: SkillCardProps) {
  const icon = categoryIcons[group.category] || '💻';

  return (
    <Card
      padding="none"
      className="w-full border border-slate-200 bg-white dark:bg-[#131c31] dark:border-slate-800 dark:hover:border-slate-700 hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 rounded-2xl"
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 dark:bg-slate-800/80 dark:border-slate-700 flex items-center justify-center text-xl shadow-2xs">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{group.category}</h3>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{group.skills.length} skills listed</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {group.skills.map((skill) => (
            <Badge
              key={skill}
              variant="neutral"
              size="md"
              className="hover:bg-slate-200 hover:text-slate-900 dark:hover:bg-slate-700 dark:hover:text-slate-100 transition-colors cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}

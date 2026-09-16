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
      padding="lg"
      className="border border-[#ece8f5] bg-white hover:-translate-y-1.5 hover:shadow-lg hover:border-[#c084fc] transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-xl bg-[#faf5ff] border border-[#e9d5ff] flex items-center justify-center text-xl shadow-xs">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#111827]">{group.category}</h3>
            <span className="text-xs text-[#9333ea] font-semibold">{group.skills.length} skills listed</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {group.skills.map((skill) => (
            <Badge
              key={skill}
              variant="purple"
              size="md"
              className="hover:bg-[#9333ea] hover:text-white transition-all cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}

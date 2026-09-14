import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import type { Tech } from '../../types/tech';

interface TechCardProps {
	tech: Tech;
}

const defaultBadgeStyle = 'bg-neutral-100 text-neutral-600 border-neutral-200';

export default function TechCard({ tech }: TechCardProps) {
	return (
		<article className="border border-neutral-200 p-5 rounded-2xl space-y-3">
			<div className="flex justify-between items-start">
				<img className="max-w-10" src={tech.icon} alt="" />
				<div className={`px-3 py-1 border ${tech.badgeColor || defaultBadgeStyle} rounded-4xl font-semibold text-xs`}>{tech.badge}</div>
			</div>
			<h3 className="text-lg font-bold mt-4">{tech.name}</h3>
			<p className="text-sm">{tech.description}</p>
			<hr className="border-neutral-200 mt-6" />
			<div className="flex justify-between text-sm">
				<p className="bg-neutral-200 text-[#475569] rounded-md px-2 py-1 font-medium">{tech.category}</p>
				<p className="font-medium">{tech.difficulty}</p>
				<p className="font-semibold text-[#475569]">
					<FontAwesomeIcon icon={faStar} className="mr-1 text-yellow-500" />
					{tech.rating}
				</p>
			</div>
			<button className="bg-neutral-900 hover:bg-neutral-950 transition-colors text-white w-full p-3 rounded-xl mt-2 cursor-pointer">Add to Stack</button>
		</article>
	);
}

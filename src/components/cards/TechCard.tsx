import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import type { Tech } from '../../types/tech';
import type { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';

interface TechCardProps {
	tech: Tech;
	items: Tech[];
	setItems: Dispatch<SetStateAction<Tech[]>>;
}

const defaultBadgeStyle = 'bg-neutral-100 text-neutral-600 border-neutral-200';

export default function TechCard({ tech, items, setItems }: TechCardProps) {
	function handleAddToStack() {
		if (items.find(item => item === tech)) toast.error(`${tech.name} is already added to your stack!`);
		else {
			setItems([...items, tech]);
			toast.success(`${tech.name} has been added to your stack successfully!`);
		}
	}

	return (
		<article className="border border-neutral-200 p-5 rounded-2xl space-y-3 flex flex-col justify-between">
			<div className="flex justify-between items-start">
				<img className="max-w-10" src={tech.icon} alt="" />
				<div className={`px-3 py-1 border ${tech.badgeColor || defaultBadgeStyle} rounded-4xl font-semibold text-xs`}>{tech.badge}</div>
			</div>
			<h3 className="text-lg font-bold font-display text-neutral-800">{tech.name}</h3>
			<p className="text-sm">{tech.description}</p>
			<hr className="border-neutral-100 mt-2" />
			<div className="flex justify-between items-center text-sm">
				<p className="bg-neutral-200 text-[#475569] rounded-md px-2 py-1 font-medium">{tech.category}</p>
				<p className="font-medium">{tech.difficulty}</p>
				<p className="font-semibold text-[#475569]">
					<FontAwesomeIcon icon={faStar} className="mr-1 text-yellow-500" />
					{tech.rating}
				</p>
			</div>
			<button onClick={handleAddToStack} className="bg-neutral-900 hover:bg-neutral-950 transition-colors text-white w-full p-3 rounded-xl mt-2 cursor-pointer self-end">
				Add to Stack
			</button>
		</article>
	);
}

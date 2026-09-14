import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import type { Tech } from '../../types/tech';

interface ItemCardProps {
	item: Tech;
}

export default function StackItem({ item }: ItemCardProps) {
	return (
		<article className="border border-neutral-200 p-4 flex justify-between rounded-2xl">
			<div className="flex items-center gap-2">
				<img src={item.icon} alt="" className="row-span-2 max-w-8" />
				<div>
					<h4 className="font-display text-xs text-neutral-800 font-bold">{item.name}</h4>
					<p className="text-[0.675rem]">{item.category}</p>
				</div>
			</div>
			<button className="cursor-pointer p-1">
				<FontAwesomeIcon icon={faXmark} className="text-2xl" />
			</button>
		</article>
	);
}

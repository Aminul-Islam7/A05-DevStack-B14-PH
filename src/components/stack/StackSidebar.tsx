import StackItem from './StackItem';
import type { Tech } from '../../types/tech';
import type { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';

interface StackSidebarProps {
	items: Tech[];
	setItems: Dispatch<SetStateAction<Tech[]>>;
}
export default function StackSidebar({ items, setItems }: StackSidebarProps) {
	function handleRemoveAll() {
		setItems([]);
		toast.info('Your stack has been cleared.');
	}

	return (
		<article className="border border-neutral-200 p-5 rounded-2xl space-y-3">
			<h3 className="text-lg font-bold text-neutral-800 font-display">Your Stack</h3>
			<p className="text-sm">{items.length ? `${items.length} Technology Selected` : 'No technologies selected yet.'}</p>
			{items.length ? items.map(item => <StackItem key={item.id} item={item} items={items} setItems={setItems}></StackItem>) : <p className="border border-dashed border-neutral-200 text-sm py-8 w-full text-center rounded-2xl">Your stack is empty.</p>}

			{items.length > 0 && (
				<button onClick={handleRemoveAll} className="border border-red-500 text-red-600 mt-4 py-2 font-semibold text-md w-full rounded-xl cursor-pointer hover:bg-red-500 hover:text-white transition-colors">
					Remove All
				</button>
			)}
		</article>
	);
}

import { useState, useEffect } from 'react';
import type { Tech } from '../../types/tech';
import TechCard from '../cards/TechCard';
import StackSidebar from '../stack/StackSidebar';

export default function TechGrid() {
	const [technologies, setTechnologies] = useState<Tech[]>([]);
	const [items, setItems] = useState<Tech[]>([]);
	useEffect(() => {
		fetch('/data/technologies.json')
			.then(response => response.json())
			.then((data: Tech[]) => setTechnologies(data));
	}, []);

	return (
		<div className="container mx-auto">
			<h2 className="font-display text-neutral-900 text-4xl font-extrabold">
				Explore the <span className="text-brand-primary">Technologies</span>
			</h2>
			<p>Pick one technology per category to build your ideal stack.</p>

			<div className="flex mt-10 gap-6">
				<div className="grid grid-cols-3 gap-6 flex-3">
					{technologies.map(tech => (
						<TechCard tech={tech} items={items} setItems={setItems} key={tech.id}></TechCard>
					))}
				</div>
				<div className="flex-1">
					<StackSidebar items={items}></StackSidebar>
				</div>
			</div>
		</div>
	);
}

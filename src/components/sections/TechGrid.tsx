import { useState, useEffect } from 'react';
import type { Tech } from '../../types/tech';
import TechCard from '../cards/TechCard';

export default function TechGrid() {
	const [technologies, setTechnologies] = useState<Tech[]>([]);
	useEffect(() => {
		fetch('/data/technologies.json')
			.then(response => response.json())
			.then((data: Tech[]) => setTechnologies(data));
	}, []);

	return (
		<div className="container mx-auto">
			<h2 className="font-display text-black text-4xl font-extrabold">
				Explore the <span className="text-brand-primary">Technologies</span>
			</h2>
			<p>Pick one technology per category to build your ideal stack.</p>

			<div className="grid grid-cols-3 gap-6 mt-10">
				{technologies.map(tech => (
					<TechCard tech={tech} key={tech.id}></TechCard>
				))}
			</div>
		</div>
	);
}

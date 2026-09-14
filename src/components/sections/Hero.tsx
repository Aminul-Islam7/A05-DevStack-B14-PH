import heroImage from '../../assets/hero-image.png';

export default function Hero() {
	return (
		<div className="container mx-auto flex py-10 items-center justify-between">
			<article className="max-w-140 space-y-8">
				<h1 className="text-6xl font-display font-bold text-black">
					Build Your Ideal <span className="text-brand-gradient">Development Stack</span>
				</h1>
				<p>Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
				<div className="mt-10 font-display flex gap-4">
					<a href="#" className="bg-brand-gradient px-5 py-3 rounded-lg font-semibold text-white">
						Explore Technologies
					</a>
					<a href="#" className="px-16 py-3 rounded-lg font-medium border border-neutral-200">
						Learn More
					</a>
				</div>
			</article>
			<img src={heroImage} className="max-w-150" alt="Tech Stack Illustration" />
		</div>
	);
}

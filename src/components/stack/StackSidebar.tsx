export default function StackSidebar() {
	return (
		<article className="border border-neutral-200 p-5 rounded-2xl space-y-3">
			<h3 className="text-lg font-bold text-neutral-800 font-display">Your Stack</h3>
			<p className="text-sm">No technologies selected yet.</p>
			<p className="border border-dashed border-neutral-200 text-sm py-8 w-full text-center rounded-2xl">Your stack is empty.</p>
			<button className="border border-red-500 text-red-600 mt-4 py-2 font-semibold text-md w-full rounded-xl">Remove All</button>
		</article>
	);
}

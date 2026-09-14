import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import icon from '../../assets/icons/React.svg';

export default function TechCard() {
	return (
		<article className="border border-neutral-200 p-5 max-w-100 rounded-2xl space-y-3">
			<div className="flex justify-between">
				<img className="max-w-12" src={icon} alt="" />
				<div className="px-3 py-1 border border-neutral-200 bg-neutral-100 rounded-4xl font-semibold text-xs">Badge</div>
			</div>
			<h3 className="text-lg font-bold mt-4">Technology Name</h3>
			<p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione fugit dignissimos aspernatur labore placeat.</p>
			<hr className="border-neutral-200 mt-6" />
			<div className="flex justify-between text-sm">
				<p className="bg-neutral-200 text-[#475569] rounded-md px-2 py-1 font-medium">Category</p>
				<p className="font-medium">Difficulty</p>
				<p className="font-semibold text-[#475569]">
					<FontAwesomeIcon icon={faStar} />
					5.0
				</p>
			</div>
			<button className="bg-black text-white w-full p-3 rounded-xl mt-2">Add to Stack</button>
		</article>
	);
}

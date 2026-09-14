import logo from '../../assets/logo.svg';

export default function Navbar() {
	return (
		<nav className="py-4 border border-b-neutral-200">
			<div className="container mx-auto flex justify-between items-center">
				<img src={logo} className="max-w-35" alt="DevStack Logo" />

				<ul className="flex gap-2 [&>li>a:hover]:text-brand-primary [&>li>a]:transition-colors [&>li>a]:font-medium">
					<li>
						<a href="#" className="p-3">
							Home
						</a>
					</li>
					<li>
						<a href="#" className="p-3">
							Technologies
						</a>
					</li>
					<li>
						<a href="#" className="p-3">
							Projects
						</a>
					</li>
					<li>
						<a href="#" className="p-3">
							About
						</a>
					</li>
					<li>
						<a href="#" className="p-3">
							Contact
						</a>
					</li>
				</ul>

				<div className="flex gap-2 items-center font-medium">
					<a href="#" className="px-4 py-2 rounded-3xl">
						Sign In
					</a>
					<a href="#" className="bg-brand-primary px-4 py-2 rounded-3xl text-white">
						Sign Up
					</a>
				</div>
			</div>
		</nav>
	);
}

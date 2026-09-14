import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import TechGrid from './components/sections/TechGrid';
import { Flip, ToastContainer, toast } from 'react-toastify';

function App() {
	const notify = () => toast('Wow so easy !');
	return (
		<>
			<Navbar></Navbar>
			<Hero></Hero>
			<TechGrid></TechGrid>
			<ToastContainer position="bottom-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" transition={Flip} />;
		</>
	);
}

export default App;


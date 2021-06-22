import './scss/App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import Community from './components/Community';
import Menu from './components/Menu';

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<Community />
			<Menu />
		</div>
	);
}

export default App;

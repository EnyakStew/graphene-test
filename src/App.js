import './scss/App.scss';
import { useRef, useEffect } from 'react';
import ReactScrollDetect, { DetectSection } from 'react-scroll-detect';
import Header from './components/Header';
import Hero from './components/Hero';
import Community from './components/Community';
import Menu from './components/Menu';

function App() {
	const handleSectionChange = () => {
		const items = document.querySelectorAll('.grid-item');
		items.forEach((item) => item.classList.add('slide-in'));
	};
	return (
		<div className="App">
			<ReactScrollDetect triggerPoint="center" onChange={handleSectionChange}>
				<Header />
				<DetectSection>
					<Hero />
				</DetectSection>
				<DetectSection>
					<Community />
				</DetectSection>

				{/* <Menu /> */}
			</ReactScrollDetect>
		</div>
	);
}

export default App;

import HeroImg from '../assets/hero.png';
import Logo from '../assets/logo.png';

const Hero = () => {
	return (
		<div className="hero">
			<div className="hero-img">
				<img src={HeroImg} alt="hero" />
			</div>
			<div className="title">
				<h1>
					THE BEST FOODIE <span>EXPERIENCE</span>
				</h1>
				<h2>NOW IN LONDON</h2>
				<div className="logo">
					<img src={Logo} alt="logo" />
				</div>
			</div>
		</div>
	);
};

export default Hero;

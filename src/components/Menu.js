import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Menu = () => {
	gsap.registerPlugin(ScrollTrigger);

	const column1 = useRef(null);
	const column2 = useRef(null);
	const column3 = useRef(null);
	const column4 = useRef(null);
	const section = useRef(null);

	useEffect(() => {
		console.log(column1.current);
		//1st column
		gsap.fromTo(
			column1.current,
			{
				y: 300,
			},
			{
				y: 0,
				scrollTrigger: {
					trigger: section.current,
					start: 'top center',
					end: 'center center',
					scrub: true,
				},
			}
		);
		//2nd
		gsap.fromTo(
			column2.current,
			{
				y: -300,
			},
			{
				y: 0,
				scrollTrigger: {
					trigger: section.current,
					start: 'top center',
					end: 'center center',
					scrub: true,
				},
			}
		);

		//3rd
		gsap.fromTo(
			column3.current,
			{
				y: 300,
			},
			{
				y: 0,
				scrollTrigger: {
					trigger: section.current,
					start: 'top center',
					end: 'center center',
					scrub: true,
				},
			}
		);
		//4th
		gsap.fromTo(
			column4.current,
			{
				y: -300,
			},
			{
				y: 0,
				scrollTrigger: {
					trigger: section.current,
					start: 'top center',
					end: 'center center',
					scrub: true,
				},
			}
		);
	}, []);

	return (
		<div className="menu" ref={section}>
			<div className="grid">
				<div className="title">
					<div className="title-text">
						<h1>OUR MENU</h1>
						<div></div>
					</div>
					<button>KNOW MORE</button>
				</div>
				<div className="grid-column col-1">
					<div className="grid-content" ref={column1}>
						<h1 id="starters">STARTERS</h1>
						<div className="menu-item">
							<h2>QUINOA CROQUETAS</h2>
							<p>
								Quinoa and cheddar croquetas with aji ricotto & pineapple salsa (v)
							</p>
							<div className="price">£4.95</div>
						</div>
						<div className="menu-item">
							<h2>CHIFFA CHICHARONES</h2>
							<p>Slow cooked, crispy pork belly with soy sauce.</p>
							<div className="price">£6.95</div>
						</div>
						<div className="menu-item">
							<h2>CALAMARES</h2>
							<p>Crispy baby squid with pickled japaleño miso salsa.</p>
							<div className="price">£6.95</div>
						</div>
					</div>
				</div>
				<div className="grid-column col-1">
					<div className="grid-content" ref={column2}>
						<h1 id="main">MAIN COURSES</h1>
						<div className="menu-item">
							<h2>EL CLASICO</h2>
							<p>
								Sea bass ceviche with aji limo tiger's milk,sweet potato purée, choclo
								corn, red onion, coriander & plantain.
							</p>
							<div className="price">£8.95</div>
						</div>
						<div className="menu-item">
							<h2>TRADITO CALLAO</h2>
							<p>
								Coria tiratido with coriander tiger's milk, black tobika, crème fraiche
								& sweet potato crunchies.
							</p>
							<div className="price">£8.95</div>
						</div>
					</div>
				</div>
				<div className="grid-column col-1">
					<div className="grid-content" ref={column3}>
						<h1 id="sides">SIDES</h1>
						<div className="menu-item">
							<h2>SUPER POLLO</h2>
							<p>Marinated corn fed chicken pieces with rocotto salsa.</p>
							<div className="price">£4.95</div>
						</div>

						<div className="menu-item">
							<h2>PATATAS FRITAS</h2>
							<p>Sweet potato fries with aji rocotto mayonnaise</p>
							<div className="price">£3.95</div>
						</div>
					</div>
				</div>
				<div className="grid-column col-1">
					<div className="grid-content" ref={column4}>
						<h1 id="desserts">DeSSERTS</h1>
						<div className="menu-item">
							<h2>ICE CREAM</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
							<div className="price">£3.95</div>
						</div>
						<div className="menu-item">
							<h2>TIRAMISU</h2>
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
							<div className="price">£3.95</div>
						</div>
						<div className="menu-item">
							<h2>CHOCOLATE BROWNIE</h2>
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
							<div className="price">£3.95</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Menu;

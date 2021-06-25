import { useRef, useEffect, useState } from 'react';
import Tacos from '../assets/tacos.png';
import Waffles from '../assets/waffles.png';
import Chocos from '../assets/chocos.png';
import Instagram from '../assets/instagram.png';
import Bubble from '../assets/bubble.png';
import Heart from '../assets/heart.png';

const Community = () => {
	const section = useRef(null);
	const [windowTop, setWindowTop] = useState(window.scrollY);

	return (
		<div className="community" ref={section}>
			<div className="title-pannel">
				<div className="title">
					<h1>MEET OUR COMMUNITY</h1>
					<div></div>
				</div>
				<div className="subtitle">
					<h3>KNOW MORE</h3>
				</div>

				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<div className="grid">
				<div className="grid-item empty"></div>
				<div className="grid-item item-1">
					<div className="item-left">
						<img src={Chocos} alt="tacos" />
						<div className="icon">
							<img src={Instagram} alt="instagram" />
						</div>
					</div>
					<div className="item-right">
						<h4>@buzzfeedfood</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
							voluptatum?
						</p>
						<div className="socials">
							<div className="social">
								<img src={Bubble} alt="bubble" />
								<p>60</p>
							</div>
							<div className="social">
								<img src={Heart} alt="heart" />
								<p>14.7</p>
							</div>
						</div>
					</div>
				</div>
				<div className="grid-item item-2">
					<div className="item-left">
						{' '}
						<img src={Waffles} alt="waffles" />
						<div className="icon">
							<img src={Instagram} alt="instagram" />
						</div>
					</div>
					<div className="item-right">
						<h4>@buzzfeedfood</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, saepe!
						</p>
						<div className="socials">
							<div className="social">
								<img src={Bubble} alt="bubble" />
								<p>22.9</p>
							</div>
							<div className="social">
								<img src={Heart} alt="heart" />
								<p>40</p>
							</div>
						</div>
					</div>
				</div>
				<div className="grid-item empty"></div>
				<div className="grid-item empty">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolores
						sapiente eligendi ratione corrupti vero quo deserunt doloribus eum quae
						aut
					</p>
				</div>
				<div className="grid-item item-3">
					<div className="item-left">
						{' '}
						<img src={Tacos} alt="tacos" />
						<div className="icon">
							<img src={Instagram} alt="instagram" />
						</div>
					</div>
					<div className="item-right">
						<h4>@buzzfeedfood</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
							dolores.
						</p>
						<div className="socials">
							<div className="social">
								<img src={Bubble} alt="bubble" />
								<p>789</p>
							</div>
							<div className="social">
								<img src={Heart} alt="heart" />
								<p>16</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Community;

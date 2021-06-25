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
				<div className="grid-column col-1" ref={column1}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat libero
						accusamus sit quos in similique quam ab. Accusamus eveniet exercitationem
						distinctio, deleniti praesentium cumque laboriosam doloribus rem assumenda
						id vero ipsam in nisi corrupti, quis dolores vel, magnam ea mollitia!
					</p>
				</div>
				<div className="grid-column col-2" ref={column2}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat libero
						accusamus sit quos in similique quam ab. Accusamus eveniet exercitationem
						distinctio, deleniti praesentium cumque laboriosam doloribus rem assumenda
						id vero ipsam in nisi corrupti, quis dolores vel, magnam ea mollitia!
					</p>
				</div>
				<div className="grid-column col-3" ref={column3}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat libero
						accusamus sit quos in similique quam ab. Accusamus eveniet exercitationem
						distinctio, deleniti praesentium cumque laboriosam doloribus rem assumenda
						id vero ipsam in nisi corrupti, quis dolores vel, magnam ea mollitia!
					</p>
				</div>
				<div className="grid-column col-4" ref={column4}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat libero
						accusamus sit quos in similique quam ab. Accusamus eveniet exercitationem
						distinctio, deleniti praesentium cumque laboriosam doloribus rem assumenda
						id vero ipsam in nisi corrupti, quis dolores vel, magnam ea mollitia!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Menu;

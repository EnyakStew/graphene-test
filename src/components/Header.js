import React from 'react';

const Header = () => {
	return (
		<div className="header">
			<header>
				<h3>LOGO</h3>

				<nav>
					<div className="nav-left">
						<div className="nav-item">ABOUT</div>
						<div className="nav-item">COMMUNITY</div>
						<div className="nav-item">LOCATION</div>
						<div className="nav-item">OUR MENU</div>
						<div className="nav-item">RECIPES</div>
					</div>
					<div className="nav-right">
						<div className="nav-item">CONTACT</div>
						<div className="nav-item">TAMER</div>
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Header;

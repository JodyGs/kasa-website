import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/kasaLogo.svg";
import "./header.scss";

export default function Header() {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<NavLink to="/">
							<img src={logo} alt="Kasa" />
						</NavLink>
					</li>
					<div>
						<li>
							<NavLink to="/" activeclassname="active">
								Accueil
							</NavLink>
						</li>
						<li>
							<NavLink to="/a-propos" activeclassname="active">
								A propos
							</NavLink>
						</li>
					</div>
				</ul>
			</nav>
		</header>
	);
}

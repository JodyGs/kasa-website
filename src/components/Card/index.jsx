import { Link } from "react-router-dom";
import "./card.scss";

export default function Card({ id, cover, title }) {
	return (
		<Link to={`/housing/${id}`}>
			<div className="lodging-card">
				<img className="lodging-card-image" src={cover} alt={title} />
				<div className="card-gradient"></div>
				<p>{title}</p>
			</div>
		</Link>
	);
}

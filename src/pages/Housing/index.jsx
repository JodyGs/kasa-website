import Collapse from "../../components/Collapse";
import { useParams } from "react-router-dom";
import "../../index.scss";
import "./housing.scss";
import ProfilePicture from "../../components/ProfilePicture";
import Rating from "../../components/Rating";
import Carrousel from "../../components/Carrousel";
import NotFound from "../../pages/NotFound";
import useFetch from "../../hooks/useFetch";

export default function Housing() {
	const { id } = useParams();
	const { data, error } = useFetch("../data.json");
	const lodging = data && data.find((d) => d.id === id);

	if (error || (data && !lodging)) {
		return <NotFound />;
	} else if (lodging) {
		return (
			<main>
				<article className="estate">
					<Carrousel slides={lodging.pictures} />
					<section className="estate-details">
						<div className="estate-details-header">
							<div className="estate-title-container">
								<h1>{lodging.title}</h1>
								<p>{lodging.location}</p>
								<ul className="tag-container">
									{lodging.tags.map((tag, index) => {
										return (
											<li key={index} className="tag">
												{tag}
											</li>
										);
									})}
								</ul>
							</div>
							<div className="estate-owner-container">
								<ProfilePicture
									picture={lodging.host.picture}
									name={lodging.host.name}
								/>
								<Rating rating={lodging.rating} />
							</div>
						</div>
						<div className="estate-collapsibles">
							<Collapse title={"Description"}>
								<p>{lodging.description}</p>
							</Collapse>
							<Collapse title={"Équipements"}>
								<ul>
									{lodging.equipments.map((equipment, index) => {
										return <li key={index}>{equipment}</li>;
									})}
								</ul>
							</Collapse>
						</div>
					</section>
				</article>
			</main>
		);
	}
}

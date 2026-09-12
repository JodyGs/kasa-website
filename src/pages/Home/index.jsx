import Banner from "../../components/Banner";
import homeBanner from "../../assets/img/banner.webp";
import Card from "../../components/Card";
import { getLodgings } from "../../components/lodgingFactory";
import "./home.scss";

const clsn = "banner";

export default function Home() {
	const lodgings = getLodgings();

	return (
		<main>
			<Banner
				img={homeBanner}
				className={clsn}
				title={"Chez vous, \npartout et ailleurs"}
			/>
			<div className="lodging-cards-container">
				{lodgings.map((lodging) => (
					<Card
						key={`housing-${lodging.id}`}
						id={lodging.id}
						cover={lodging.cover}
						title={lodging.title}
					/>
				))}
			</div>
		</main>
	);
}

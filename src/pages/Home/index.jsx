import Banner from "../../components/Banner";
import homeBanner from "../../assets/img/banner.webp";
import Card from "../../components/Card";
import useFetch from "../../hooks/useFetch";
import "./home.scss";
import NotFound from "../NotFound";

const clsn = "banner";

export default function Home() {
	const { data, error } = useFetch("../data.json", []);

	if (error) {
		return <NotFound />;
	} else if (data) {
		return (
			<main>
				<Banner
					img={homeBanner}
					className={clsn}
					title={"Chez vous, \npartout et ailleurs"}
				/>
				<div className="lodging-cards-container">
					{data &&
						data.length > 0 &&
						data.map((lodging) => (
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
}

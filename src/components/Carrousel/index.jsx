import React from "react";
import leftArrow from "../../assets/img/arrow-left.svg";
import rightArrow from "../../assets/img/arrow-right.svg";
import "./carrousel.scss";

export default function Carrousel({ slides }) {
	const [current, setCurrent] = React.useState(0);
	const [previous, setPrevious] = React.useState(null);
	const length = slides.length;

	React.useEffect(() => {
		setCurrent(0);
		setPrevious(null);
	}, [slides]);

	if (!length) {
		return null;
	}

	const activeIndex = current < length ? current : 0;

	function goToSlide(index) {
		setPrevious(activeIndex);
		setCurrent(index);
	}
	function goToNextSlide() {
		goToSlide(activeIndex === length - 1 ? 0 : activeIndex + 1);
	}
	function goToPrevSlide() {
		goToSlide(activeIndex === 0 ? length - 1 : activeIndex - 1);
	}

	function setSlideDirection(index) {
		if (length > 2) {
			if (activeIndex === length - 1 && index === 0) {
				return "next";
			}
			if (activeIndex === 0 && index === length - 1) {
				return "prev";
			}
		}
		return index > activeIndex ? "next" : "prev";
	}

	// seules la photo qui entre et celle qui sort sont animees : les autres se
	// repositionnent hors champ instantanement, sinon on les voit traverser
	// l'ecran quand elles changent de cote (au bouclage 6/6 -> 1/6 par exemple)
	function slideClass(index) {
		if (index === activeIndex) {
			return "carrousel-img current";
		}
		const direction = setSlideDirection(index);
		return index === previous
			? "carrousel-img " + direction + " leaving"
			: "carrousel-img " + direction;
	}

	return (
		<div className="carrousel-container">
			{length !== 1 && (
				<div className="carrousel-button-container">
					<button className="left-arrow" onClick={goToPrevSlide}>
						<img src={leftArrow} alt="précédente" />
					</button>
					<button className="right-arrow" onClick={goToNextSlide}>
						<img src={rightArrow} alt="suivante" />
					</button>
				</div>
			)}
			{slides.map((slide, index) => {
				return (
					<div className={slideClass(index)} key={index}>
						<img src={slide} alt="gallerie d'images" />
					</div>
				);
			})}
			{length !== 1 && (
				<p className="carrousel-counter">
					{activeIndex + 1}/{length}
				</p>
			)}
		</div>
	);
}

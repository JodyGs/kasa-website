import "./collapse.scss";
import React from "react";
import arrow from "../../assets/img/arrow.svg";

function Collapse({ title, children }) {
	const [open, setOpen] = React.useState(false);
	const toggle = () => {
		setOpen(!open);
	};
	const contentRef = React.useRef();
	const contentId = React.useId();

	return (
		<div className="collapse-container">
			{/* toute la barre ouvre le bloc ; le bouton reste la cible clavier,
			    son clic remonte jusqu'ici */}
			<div className="collapse-title" onClick={toggle}>
				<p>{title}</p>
				<button
					type="button"
					aria-expanded={open}
					aria-controls={contentId}
					aria-label={(open ? "Fermer" : "Ouvrir") + " " + title}
				>
					<img src={arrow} className={open ? "arrow down" : "arrow up"} alt="" />
				</button>
			</div>

			<div
				id={contentId}
				className={open ? "collapse-parent show" : "collapse-parent hide"}
				ref={contentRef}
				style={
					open
						? { height: contentRef.current.scrollHeight + "px" }
						: { maxHeight: "0px" }
				}
			>
				<div className="collapse-content">{children}</div>
			</div>
		</div>
	);
}

export default Collapse;

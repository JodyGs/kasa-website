import "./banner.scss";

export default function Banner({ img, className, title }) {
	return (
		<div className={className}>
			<img src={img} alt="Hero Banner" />
			{title && <h1>{title}</h1>}
		</div>
	);
}

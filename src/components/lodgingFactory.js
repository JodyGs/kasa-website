import rawLodgings from "../assets/data.json";

function toText(value, fallback = "") {
	return typeof value === "string" && value.trim() ? value : fallback;
}

function toList(value) {
	return Array.isArray(value) ? value.filter((item) => toText(item)) : [];
}

export function createLodging(raw) {
	if (!raw || !toText(raw.id)) {
		return null;
	}

	const pictures = toList(raw.pictures);
	const cover = toText(raw.cover, pictures[0]);

	return {
		id: raw.id,
		title: toText(raw.title, "Logement"),
		location: toText(raw.location),
		description: toText(raw.description),
		cover,
		pictures: pictures.length ? pictures : toList([cover]),
		tags: toList(raw.tags),
		equipments: toList(raw.equipments),
		rating: Number(raw.rating) || 0,
		host: {
			name: toText(raw.host && raw.host.name),
			picture: toText(raw.host && raw.host.picture),
		},
	};
}

const lodgings = Array.isArray(rawLodgings)
	? rawLodgings.map(createLodging).filter(Boolean)
	: [];

export function getLodgings() {
	return lodgings;
}

export function getLodgingById(id) {
	return lodgings.find((lodging) => lodging.id === id) || null;
}

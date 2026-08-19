import React from "react";

export default function useFetch(url, initialValue) {
	const [data, setData] = React.useState(initialValue);
	const [error, setError] = React.useState(false);

	React.useEffect(() => {
		async function getData() {
			try {
				const response = await fetch(url);
				const data = await response.json();
				setData(data);
			} catch (err) {
				setError(true);
			}
		}
		getData();
	}, [url]);

	return { data, error };
}

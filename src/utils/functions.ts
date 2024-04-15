export function formatRuntime(runtime: number) {
	const hours = Math.floor(runtime / 60);
	const minutes = runtime % 60;
	const formattedRuntime = `${hours}h ${minutes}mins`;
	return formattedRuntime;
}
export function formatDate(dateString: string) {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	return new Date(dateString).toLocaleDateString("en-US", options);
}
export function getAge(dateString: string, deathday?: string) {
	const endDate = deathday ? new Date(deathday) : new Date();
	const age = Math.floor(
		(endDate.getTime() - new Date(dateString).getTime()) /
			(365.25 * 24 * 60 * 60 * 1000),
	);
	return age;
}

export function imageValidator (img_url:string) {
	if (
		img_url === "https://image.tmdb.org/t/p/originalnull" ||
		img_url === "https://image.tmdb.org/t/p/originalundefined&w=640&q=75"
	) {
		return "/fallback.png";
	}
	else {
		return img_url
	}
}
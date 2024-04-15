import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: Response) {
	const url = `https://api.themoviedb.org/3/tv/on_the_air?include_adult=falselanguage=en-US&page=1`;

	try {
		const upcoming = await fetch(url, {
			method: "GET",
			headers: {
				Accept: "application/json",
				Authorization: `Bearer ${process.env.API_KEY}`,
			},
		});

		const data = await upcoming.json();
		return NextResponse.json(data);
	} catch (error) {
		console.error(error);
		throw new Error();
	}
}

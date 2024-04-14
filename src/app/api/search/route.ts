import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: Response) {
	// Get search parameters
	const searchParameters = req.nextUrl.searchParams;
	const searchQuery = searchParameters.get("query");

	const url = `https://api.themoviedb.org/3/search/multi?query=${searchQuery}&include_adult=false&language=en-US&page=1`;
	try {
		const trending = await fetch(url, {
			method: "GET",
			headers: {
				Accept: "application/json",
				Authorization: `Bearer ${process.env.API_KEY}`,
			},
		});

		const data = await trending.json();
		return NextResponse.json(data);
	} catch (error) {
		console.error(error)
		throw new Error()
	}
}

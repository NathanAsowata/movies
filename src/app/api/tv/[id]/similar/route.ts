import { NextRequest, NextResponse } from "next/server";

export async function GET(
	request: Request,
	{ params }: { params: { id: string } },
) {
	// Get TV ID
	const tvID = params.id;

	const url = `https://api.themoviedb.org/3/tv/${tvID}/recommendations?include_adult=false`;

	try{
		const similar = await fetch(url, {
			method: "GET",
			headers: {
				Accept: "application/json",
				Authorization: `Bearer ${process.env.API_KEY}`,
			},
		});

		const data = await similar.json();
		return NextResponse.json(data.results);
	} catch (error) {
		console.error(error)
		throw new Error()
	}
}

import { NextRequest, NextResponse } from "next/server";

export async function GET(
	request: Request,
	{ params }: { params: { id: string } },
) {
	// Get movie ID
	const movieID = params.id;

	const url = `https://api.themoviedb.org/3/movie/${movieID}`;

	const details = await fetch(url, {
		method: "GET",
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${process.env.API_KEY}`,
		},
	});

	const data = await details.json();

	return NextResponse.json(data);
}

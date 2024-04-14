import { NextRequest, NextResponse } from "next/server";

export async function GET(
	request: Request,
	{ params }: { params: { id: string } },
) {
	// Get TV ID
	const tvID = params.id;

	const url = `https://api.themoviedb.org/3/tv/${tvID}`;

	try{
		const details = await fetch(url, {
			method: "GET",
			headers: {
				Accept: "application/json",
				Authorization: `Bearer ${process.env.API_KEY}`,
			},
		});

		const data = await details.json();
		return NextResponse.json(data);
	} catch (error) {
		console.error(error)
		throw new Error()
	}
}

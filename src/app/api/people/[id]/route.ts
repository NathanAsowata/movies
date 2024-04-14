import { NextRequest, NextResponse } from "next/server";

export async function GET(
	request: Request,
	{ params }: { params: { id: string } },
) {
	// Get person ID
	const personID = params.id;

	const url = `https://api.themoviedb.org/3/person/${personID}?append_to_response=combined_credits`;
	try {
		const person = await fetch(url, {
			method: "GET",
			headers: {
				Accept: "application/json",
				Authorization: `Bearer ${process.env.API_KEY}`,
			},
		});

		const data = await person.json();
		return NextResponse.json(data);
	} catch (error) {
		console.error(error)
		throw new Error()
	}
}

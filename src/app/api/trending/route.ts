import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: Response) {
	// Get search parameters
	const searchParameters = req.nextUrl.searchParams;
	const searchQuery = searchParameters.get("type");

	const url = `https://api.themoviedb.org/3/trending/${searchQuery}/day`;
	try{
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

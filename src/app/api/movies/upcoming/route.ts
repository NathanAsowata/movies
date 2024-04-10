import { NextRequest, NextResponse } from "next/server";


export async function GET (req:NextRequest, res:Response) {
    
    const url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`
    
    const upcoming = await fetch(url, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.API_KEY}`
        }
    })

    const data = await upcoming.json()

    return NextResponse.json(data)
}
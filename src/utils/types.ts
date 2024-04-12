export type movieCardProps = {
    id: number,
    poster_path: string,
    title: string,
    vote_average: number
    vote_count: number
}
export type tvCardProps = {
    id: number,
    poster_path: string,
    name: string,
    vote_average: number,
    vote_count: number
}
export type personCardProps = {
    id: number,
    profile_path: string,
    name: string,
    known_for_department: string,
    character?: string 
}
export type searchResultType = {
    id: number,
    media_type: string,
    poster_path: string,
    profile_path: string,
    title: string,
    name:string
    vote_average: number,
    vote_count: number,
    known_for_department: string
}
export type tabProps = {
    id: number,
    name: string,
    displayName: string
}
export type contextType = {
    data: string;
    setData: (value: string) => void;
}
export type movieDetailsType = {
    title: string,
    overview: string
    poster_path:  string,
    imdb_id: string,
    vote_average: number,
    vote_count: number,
    release_date: string,
    runtime: number,
    status: string,
    genres: {
        id: number,
        name: string
    }[]
}
export type tvDetailsType = {
    name: string,
    overview: string,
    poster_path: string,
    first_air_date: string,
    last_air_date: string,
    in_production: boolean,
    number_of_episodes: number,
    number_of_seasons: number,
    vote_average: number,
    vote_count: number,
    genres: {
        id: number,
        name: string
    }[]
}
export type personDetailsType = {
    name: string,
    profile_path: string,
    biography: string,
    birthday: string,
    deathday: string,
    combined_credits: {
        cast: {
            id: number,
            media_type: string,
            poster_path: string,
            title: string,
            name:string
            vote_average: number,
            vote_count: number,
        }[]
    }
}
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
    known_for_department: string
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
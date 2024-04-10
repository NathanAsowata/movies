import { tvCardProps } from "@/utils/types"
import Card from "./Card"


const TvCard = ({tv}:{tv: tvCardProps}) => {

  const link = `/tv/${tv.id}`
  const img_url = `https://image.tmdb.org/t/p/original${tv.poster_path}`
  const name = tv.name
  const isPerson = false
  const additonalInfo = tv.vote_average

  return (
    <Card link={link} img_url={img_url} name={name} isPerson={isPerson} additonalInfo={additonalInfo} />
  )
}

export default TvCard
import { personCardProps } from "@/utils/types"
import Card from "./Card"


const PersonCard = ({person}: {person:personCardProps}) => {


  const link = `/people/${person.id}`
  const img_url = `https://image.tmdb.org/t/p/original${person.profile_path}`
  const name = person.name
  const isPerson = true
  const additonalInfo = person.character ? person.character : person.known_for_department

  return (
    <Card link={link} img_url={img_url} name={name} isPerson={isPerson} additonalInfo={additonalInfo} />
  )
}

export default PersonCard
// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {id, teamImageUrl, name} = teamCardDetails
  return (
    <li className="listItems-teamCard">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageUrl} alt={name} className="teamCard-Img" />
        <p className="name-para">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard

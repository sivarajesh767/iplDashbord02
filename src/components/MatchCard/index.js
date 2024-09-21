// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {result, competingTeamLogo, competingTeam, matchStatus} =
    matchCardDetails
  const getMatchStatusClassName = status =>
    status === 'Won' ? 'Match-Won' : 'Match-Lost'
  const matchStatusClassName = `match-status ${getMatchStatusClassName(
    matchStatus,
  )}`
  return (
    <li>
      <img
        src={competingTeamLogo}
        alt={`${competingTeam}`}
        className="recent-img"
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={`${matchStatusClassName}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard

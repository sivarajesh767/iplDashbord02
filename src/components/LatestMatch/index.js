// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    venue,
    result,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchData
  return (
    <div>
      <h1>Latest Match</h1>
      <div>
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
        <img src={competingTeamLogo} />
        <hr />
        <p>First Innings</p>
        <p>{firstInnings}</p>

        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of the Match</p>
        <p>{manOfTheMatch}</p>

        <p>umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch

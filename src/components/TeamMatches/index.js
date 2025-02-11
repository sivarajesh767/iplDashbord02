// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

const ApiUrl = 'https://apis.ccbp.in/ipl'
class TeamMatches extends Component {
  state = {isLoading: true, teamMatcheDetails: {}}

  componentDidMount() {
    this.getTeamMatches()
  }

  formattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`${ApiUrl}/${id}`)
    const fetchData = await response.json()
    const updatedData = {
      teamBannerUrl: fetchData.team_banner_url,
      latestMatch: this.formattedData(fetchData.latest_match_details),
      recentMatches: fetchData.recent_matches.map(eachMatch =>
        this.formattedData(eachMatch),
      ),
    }
    this.setState({teamMatcheDetails: updatedData, isLoading: false})
  }

  renderRecentMatches = () => {
    const {teamMatcheDetails} = this.state
    const {recentMatches} = teamMatcheDetails
    return (
      <ul className="unorderList-matchCard">
        {recentMatches.map(eachMatchCard => (
          <MatchCard key={eachMatchCard.id} matchCardDetails={eachMatchCard} />
        ))}
      </ul>
    )
  }

  getFormatted = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'

      case 'KKR':
        return 'kkr'

      case 'CSK':
        return 'csk'

      case 'RR':
        return 'rr'

      case 'MI':
        return 'mi'

      case 'SH':
        return 'sh'

      case 'DC':
        return 'dc'

      default:
        return ''
    }
  }

  renderLatestMatches = () => {
    const {teamMatcheDetails} = this.state
    const {teamBannerUrl, latestMatch} = teamMatcheDetails
    return (
      <div className="latestMatch-co">
        <img src={teamBannerUrl} alt="team banner" />

        <LatestMatch latestMatchData={latestMatch} />
        {this.renderRecentMatches()}
      </div>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-co">
      <Loader type="Oval" color="#ffff" height={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    const className = `team-matches-container ${this.getFormatted()}`
    return (
      <div className={className}>
        {isLoading ? this.renderLoader() : this.renderLatestMatches()}
      </div>
    )
  }
}
export default TeamMatches

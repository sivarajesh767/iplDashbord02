import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'
const ApiUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {isLoading: true, cricketTeamCardsDetails: []}
  componentDidMount() {
    this.getTeamCard()
  }
  getTeamCard = async () => {
    const response = await fetch(ApiUrl)
    const fetchedData = await response.json()
    const updatedData = fetchedData.teams.map(eachDetails => ({
      id: eachDetails.id,
      name: eachDetails.name,
      teamImageUrl: eachDetails.team_image_url,
    }))
    this.setState({cricketTeamCardsDetails: updatedData, isLoading: false})
  }

  matchCardView = () => {
    const {cricketTeamCardsDetails} = this.state
    return (
      <ul className="unorderList">
        {cricketTeamCardsDetails.map(eachDetail => (
          <TeamCard key={eachDetail.id} teamCardDetails={eachDetail} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-co">
      <Loader type="Oval" color="#ffff" height={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-co">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          alt="ipl logo"
          className="ipllogo-img"
        />
        <div className="bg-co1">
          <h1 className="heading-1">IPL Dashbord</h1>
          <div>{isLoading ? this.renderLoader() : this.matchCardView()}</div>
        </div>
      </div>
    )
  }
}
export default Home

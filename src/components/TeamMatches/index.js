// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {banner: '', list: {}, load: true}

  componentDidMount() {
    this.getDetailsOfTeam()
  }

  getDetailsOfTeam = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const res = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await res.json()
    console.log(data)

    const image = data.team_banner_url

    this.setState({banner: image, list: data, load: false})
  }

  render() {
    const {banner, load, list} = this.state
    return (
      <div>
        {load ? (
          <div data-testid="loader" className="ccc">
            <Loader type="Oval" color="blue" height={50} width={50} />
          </div>
        ) : (
          <div className="hlo">
            <img src={banner} className="iii" alt="team banner" />
            <p className="p">Latest Matches</p>
            <LatestMatch list={list} />
            <MatchCard list={list} />
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches

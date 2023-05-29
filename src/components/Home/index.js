// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {isLoading: true, teams: []}

  componentDidMount() {
    this.cards()
  }

  cards = async () => {
    const res = await fetch('https://apis.ccbp.in/ipl')
    const data = await res.json()

    const updateData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    console.log(updateData)
    this.setState({teams: updateData, isLoading: false})
  }

  render() {
    const {teams, isLoading} = this.state
    return (
      <div className="bg">
        <div className="cen">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="img"
            alt="ipl logo"
          />
          <h1 className="h">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div data-testid="loader" className="ccc">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="cv">
            <TeamCard teams={teams} />
          </div>
        )}
      </div>
    )
  }
}
export default Home

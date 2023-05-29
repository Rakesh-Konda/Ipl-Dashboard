// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  constructor(props) {
    super(props)

    this.state = {teams: props.teams}
  }

  render() {
    const {teams} = this.state
    return (
      <div className="o">
        <ul className="ul">
          {teams.map(each => (
            <Link
              className="link"
              to={`/team-matches/${each.id}`}
              key={each.id}
            >
              <li key={each.id} className="li">
                <div className="kk">
                  <img src={each.teamImageUrl} className="ii" alt={each.name} />
                  <p className="hhh">{each.name}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamCard

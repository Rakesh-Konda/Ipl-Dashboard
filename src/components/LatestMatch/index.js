// Write your code here
import './index.css'

const LatestMatch = props => {
  const {list} = props
  const data = list.latest_match_details

  const each = {
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    date: data.date,
    firstInnnings: data.first_innings,
    id: data.id,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    matchStatus: data.match_status,
    secondInnings: data.second_innings,
    umpires: data.umpires,
    venue: data.venue,
  }

  return (
    <div className="bhh">
      <div className="middle">
        <div>
          <p className="head">{each.competingTeam}</p>
          <p className="p">{each.date}</p>
          <p className="p">{each.venue}</p>
          <p className="p">{each.result}</p>
        </div>

        <div>
          <img
            src={each.competingTeamLogo}
            alt={`latest match ${each.competingTeam}`}
            className="logo"
          />
        </div>
        <div>
          <h1 className="head">First Innings</h1>
          <p className="p">{each.firstInnnings}</p>
          <h1 className="head">Second Innings</h1>
          <p className="p">{each.secondInnings}</p>
          <h1 className="head">Man Of The Match</h1>
          <p className="p">{each.manOfTheMatch}</p>
          <h1 className="head">Umpires</h1>
          <p className="p">{each.umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch

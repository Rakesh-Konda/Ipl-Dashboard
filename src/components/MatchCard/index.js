// Write your code here

import './index.css'

const MatchCard = props => {
  const {list} = props

  const MatchCardData = list.recent_matches

  const item = MatchCardData.map(each => ({
    id: each.id,
    competingTeam: each.competing_team,
    competingTeamLogo: each.competing_team_logo,
    date: each.date,
    firstInnings: each.first_innings,
    manOfTheMatch: each.man_of_the_match,
    matchStatus: each.match_status,
    result: each.result,
    secondInnings: each.second_innings,
    umpires: each.umpires,
    venue: each.venue,
  }))

  console.log(MatchCardData)

  return (
    <div>
      <ul className="ul">
        {item.map(hlo => (
          <li key={hlo.id}>
            <div className="div">
              <img
                src={hlo.competingTeamLogo}
                alt={`competing team ${hlo.competingTeam}`}
                className="log"
              />
              <p className="hhh">{hlo.competingTeam}</p>
              <p className="ppp">{hlo.result}</p>
              <p className={hlo.matchStatus === 'Won' ? 'green' : 'red'}>
                {hlo.matchStatus}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default MatchCard

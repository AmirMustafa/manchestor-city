import React from "react";

// Here we are list of matched in home page. Passed from Blocks.js
const MatchesBlock = ({ match }) => {
  // console.log(match);
  return (
    <div className="match_block">
      <div className="match_date">
        {match.final ? match.date : `Match not played yet: ${match.date}`}
      </div>
      <div className="match_wrapper">
        <div className="match_top">
          <div className="left">
            <div
              className="icon"
              style={{
                background: `url("/images/team_icons/${match.localThmb}.png")`
              }}
            ></div>
            <div className="team_name">{match.local}</div>
          </div>
          <div className="right">{match.final ? match.resultLocal : "-"}</div>
        </div>
        <div className="match_bottom">
          <div className="left">
            <div
              className="icon"
              style={{
                background: `url("/images/team_icons/${match.awayThmb}.png")`
              }}
            ></div>
            <div className="team_name">{match.away}</div>
          </div>
          <div className="right">{match.final ? match.resultaway : "-"}</div>
        </div>
      </div>
    </div>
  );
};

export default MatchesBlock;

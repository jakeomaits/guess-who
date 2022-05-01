import React from 'react';

class NavBar extends React.Component {


  render() {
    return (
      <div>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">

              {/* todo: set class "active" for li if the team is active. */}
              {this.props.teams.teams.map(function (team, index) {
                return <li class="nav-item" href="#" key={index}><a class="nav-link" href="#">{team.name}</a></li>;
              })}

            </ul>
          </div>
        </nav>

      </div>

    )
  }

}

export default NavBar; 
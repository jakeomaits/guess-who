import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Team from './Team';
import 'primeflex/primeflex.css';

//import config from "!json!../../cfg/config.json" 

//let teams = require('~/app/Teams.json');
//console.log(teams[0].name)

import teams from './teams.json';
let testVar = "test";
//console.log(teams[0].name)

//pick a random member with a list of questions to display
function getRandomMember()
{
  let team = teams.teams[0];
}

function App() {
  return (
    <div>
      
      <Team teams={teams} activeTeamIndex={0}></Team>
    </div>
  );
}

export default App;

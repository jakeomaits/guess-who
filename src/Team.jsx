import React from 'react';

import MemberContainer from './MemberContainer';
import QuestionContainer from './QuestionContainer';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import ScoreContainer from './ScoreContainer';
import { SelectButton } from 'primereact/selectbutton';


class Team extends React.Component {

  constructor(props) {
    super(props);
    this.state = { questionCounter: 1, activeTeam: props.teams.teams[props.activeTeamIndex], activeTeamIndex: this.props.activeTeamIndex };
    this.redrawQuestions = this.redrawQuestions.bind(this);
    this.redrawQuestions(0);
  }

  setIndex(index) {
    this.state.activeTeamIndex = index;
  }

  updateQuestions(counter) {
    this.setState({
      questionCounter: counter
    })
    this.theQuestions = this.member.questions.slice(0, counter);
  }

  incrementQuestionCounter = () => {
    if (this.state.questionCounter <= this.member.questions.length) {
      var counter = this.state.questionCounter + 1;

      this.updateQuestions(counter);
    }
  }


  decrementQuestionCounter = () => {
    if (this.state.questionCounter > 1) {
      var counter = this.state.questionCounter - 1;

      this.updateQuestions(counter);
    }
  }

changeTeam = (e) => 
{
  this.setState({ activeTeamIndex: e.value })
  this.redrawQuestions(e.value);
}

redrawQuestions = (index) =>
{
  this.setState({ questionCounter: 1 })
  var memberWithQuestions = this.props.teams.teams[index].members.filter(function (member) {
    return (member.questions != undefined && member.questions.length > 0);
  });

  var randomIndex = Math.floor(Math.random() * (memberWithQuestions.length));
  this.member = memberWithQuestions[randomIndex];

  this.theQuestions = this.member.questions.slice(0, 1);
}


  render() {
    const options = [
      { label: 'Payments', value: 0 },
      { label: 'Search', value: 1 },
      { label: 'App Tx', value: 2 },
      { label: 'Mobile', value: 3 },
      { label: 'Cart', value: 4 },
      { label: 'Product Display', value: 5 },
      { label: 'eCom/Custom Product', value: 6 },
      { label: 'Management', value: 7 }
    ];

    return (
      <div class="question">

        <SelectButton value={this.state.activeTeamIndex} options={options} onChange={(e) => this.changeTeam(e)} />

        <nav class="navbar navbar-expand-lg navbar-light bg-light">

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">



              {/* todo: set class "active" for li if the team is active. */}
              {this.props.teams.teams.map(function (team, index) {
                //return <li class="nav-item" href="#" key={index}><a class="nav-link" onClick="{(e) => this.setIndex({index})}" href="#">{team.name}</a></li>;
              })}

            </ul>
          </div>
        </nav>

        <div>
          <MemberContainer team={this.props.teams.teams[this.state.activeTeamIndex]}></MemberContainer>
        </div>
        <div class="questionButtonContainer">
          <Button label="Hide Previous" onClick={() => this.decrementQuestionCounter()} />{'\u00A0'}
          <Button label="Reveal Next" onClick={() => this.incrementQuestionCounter()} />

        </div>

        <div className="p-grid">
          <div className="p-col-8"><QuestionContainer questions={this.theQuestions}></QuestionContainer></div>
          <div className="p-col-4"><ScoreContainer teams={this.props.teams}></ScoreContainer> </div>
        </div>

      </div>
    )
  }
}

export default Team; 
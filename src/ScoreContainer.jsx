import React from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/datatable';
import {InputText} from 'primereact/inputtext';
import 'primereact/resources/primereact.min.css';

class ScoreContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {teams: this.props.teams.teams};
  }



  render() {

    const headings = [
      'Team',
      'Points'
    ];

    const self = this;

    function pointsEditor(props) {
      return <InputText type="text" value={self.state.teams[props.rowIndex]['points']} onChange={(e) => onEditorValueChange(props, e.target.value)} />;
  }

  function onEditorValueChange(props, value) {
    let updatedTeams = self.state.teams;
    updatedTeams[props.rowIndex][props.field] = value;
    self.setState({teams: updatedTeams});
}
   
    return (

      <div className="scoreTableContainer" >
        
        <div classname="innerScoreTablecContainer">
            <DataTable value={this.state.teams} >
                <Column field="name" header="Team" />
                <Column field="points" header="Points" editor={pointsEditor} />
            </DataTable>
            </div>
    </div>
    
    )
  }
}

export default ScoreContainer; 
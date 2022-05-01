import React from 'react';
import Question from './Question';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/datatable';


class QuestionContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const headings = [
      'Win',
      'Lose',
      'Clue',
      '', 
      '',
    ];

    return (

      <div>
            <DataTable className="display" value={this.props.questions} >
                <Column field="pointsCorrect" header="Win" style={{width:'20%'}} />
                <Column field="pointsIncorrect" header="Lose" style={{width:'20%'}} />
                <Column field="clue" header="Clue" />
            </DataTable>
 

     {/* <div class="question-container">
        <table class="table">
          <thead>
            <tr>
              <td scope="col">Win</td>
              <td scope="col">Lose</td>
              <td scope="col">Title</td>
              <td scope="col">Clue</td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
             I have no idea why this is called "team" 
            {this.props.team.map(function (question, index) {
              return <Question question={question}></Question>
            })}
          </tbody>
        </table>
      </div>*/}
    </div>
    
    )
  }
}

export default QuestionContainer; 
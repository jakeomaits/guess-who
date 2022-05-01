import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Question extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <tbody>
            <tr>
              <td>{this.props.question.pointsCorrect}</td>
              <td>{this.props.question.pointsIncorrect}</td>
              <td>{this.props.question.title}</td>
              <td>{this.props.question.clue}</td>
              <td>
                <ButtonDropdown isOpen="false" toggle="true">
                  <DropdownToggle caret color="success">
                    Correct
        </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Payments</DropdownItem>
                    <DropdownItem>Search</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </td>
              <td>
                <ButtonDropdown isOpen="false" toggle="true">
                  <DropdownToggle caret color="danger">
                    Incorrect
        </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Payments</DropdownItem>
                    <DropdownItem>Search</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </td>
            </tr>
          </tbody>
    )
  }
}

export default Question; 
import React from 'react';
import Member from './Member';

class MemberContainer extends React.Component {

  render() {
    return (
      <div className="cardWrapper">
        <div className='cardRow'>
          {this.props.team.members.map(function (member, index) {
                return <Member member={member} />;
              })}
              </div>
      </div>
    )
  }
}

export default MemberContainer; 
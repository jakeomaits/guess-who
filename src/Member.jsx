import React from 'react';

class Member extends React.Component {

  render() {
    return (
      <div class="card"  >
        <img class="memberCard" width="200" height="300" src={'./photos/' + this.props.member.name + '.jpg'} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{this.props.member.name}</h5>
          <p class="card-text">{this.props.member.title}</p>
        </div>
      </div>
    )
  }
}

export default Member; 
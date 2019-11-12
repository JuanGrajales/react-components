
import React from "react";
// ^ this is always needed for any react components

class IdCard extends React.Component {
  
  render() {
    return (
      <div>
        {this.props.firstName}
        {/* <img src={this.props.picture} alt={this.props.firstName} />
        <div>{this.props.firstName}</div>
        <div>{this.props.lastName}</div>
        <div>{this.props.gender}</div>
        <div>{this.props.height}</div>
        <div>{this.props.birth}</div> */}
        
      </div>
    );
  }
}

export default IdCard;
import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {
   render() {
      if (!this.props.user) {
         return (<h6>Select User...</h6>);
      }
      return (
         <div className="user_info">
            <h3>Name: {this.props.user.name}</h3>
            <h3>Gender: {this.props.user.gender}</h3>
            <h3>Age: {this.props.user.age}</h3>
            <h3>Weight: {this.props.user.weight}</h3>
         </div>
      )
   }
}

function mapStateToProps(state) {
   return {
      user: state.activeUser
   };
}

export default connect(mapStateToProps)(UserDetail);

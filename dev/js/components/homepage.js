import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
   render() {
      return (
         <div>
            <div>Hello world! This is the home page route.</div>
            <Link to='/test'>ddd</Link>
         </div>
      );
   }
}

export default HomePage;

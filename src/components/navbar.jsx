import React, { Component } from 'react';

// class NavBar extends Component {
//   state = {  }
//   render() { 
//     return ( 
//       <nav className="navbar navvbar-light bg-light">
//         <a href="#" className="navbar-brand">
//           Navbar <span>{this.props.totalCounters}</span>
//         </a>
//       </nav>
//      );
//   }
// }
 
// const NavBar = (props) => {
//   return ( 
//     <nav className="navbar navvbar-light bg-light">
//       <a href="#" className="navbar-brand">
//         Navbar <span>{props.totalCounters}</span>
//       </a>
//     </nav>
//    );
// }

const NavBar = ({totalCounters}) => {
  return ( 
    <nav className="navbar navvbar-light bg-light">
      <a href="#" className="navbar-brand">
        Navbar <span>{totalCounters}</span>
      </a>
    </nav>
   );
}

export default NavBar;
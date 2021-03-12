import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'


class Logout extends Component {
      constructor(props){
          super(props);
          this.state = {
              isAuthenticated: false
          }
      }

      logOutHandler = () => {
         axios.delete("//localhost:4000/api/student/auth/logout")
         .then( res => {console.log(res)})
         .catch(err => {console.log(err)})
      }

      componentDidMount = () => {
        this.props.toggleLogoutHandler();
      }


      render()
      {
          return(
             <div>

             </div>
          )
      }
}

export default Logout;
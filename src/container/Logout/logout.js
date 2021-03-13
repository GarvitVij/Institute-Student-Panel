import React, {Component} from 'react';
import axios from 'axios';

class Logout extends Component {
      logOutHandler = () => {
         axios.delete("//localhost:4000/api/student/auth/logout")
         .then( res => {console.log(res)})
         .catch(err => {console.log(err)})
      }

      componentDidMount = () => {

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
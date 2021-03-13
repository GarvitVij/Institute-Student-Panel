import React from 'react';
import {Redirect} from 'react-router-dom'

   const FourOFour = (props) => (
       <div>
            <h1> Oops, You are here ! Doesnt seem a valid page !🤔  </h1>
            <button onClick={() => <Redirect to="/" />}>Lets go to some that works ! click me😀  </button>
       </div>
   )

export default FourOFour
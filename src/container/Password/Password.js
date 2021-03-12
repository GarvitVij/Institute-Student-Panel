import React, { Component } from 'react';
import ForgotPassword from '../../component/UI/ForgotPassword/ForgotPassword';
import classes from './Password.module.css';


class Password extends Component {  
    render() {
        return(
            <div className={classes.Layout}>  
                 <ForgotPassword/>
            </div>
        )
    }
}

export default Password
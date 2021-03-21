import React, { Component } from 'react';
import ForgotPassword from '../../component/UI/ForgotPassword/ForgotPassword';
import classes from './Password.module.css';
import axios from '../../axios'
import { Typography } from '@material-ui/core';

class Password extends Component {  

    state={
        rollNumber: null,
        sent : false
    }

    rollNumberChangeHandler = (value) => {
        this.setState({rollNumber: value })
    }

    ResetPassword = ()=>{

        axios.post('/api/student/auth/resetpwd', { rollNumber: this.state.rollNumber})
        .then(res => {this.setState({sent: true})})
        .catch(err => console.log(err) )
    }

    render() {
        let sent = this.state.sent === true ?
        <Typography className={classes.Text} align="center" variant="h6">You will receive a email to change password !</Typography>
        : null
        return(
            <div className={classes.Container}>
            <div className={classes.Background}></div>  
            <div className={classes.Layout}>
            <ForgotPassword 
                inputHandler={this.rollNumberChangeHandler} 
                value={this.state.rollNumber} 
                submit={this.ResetPassword}
                />
            {sent}
            </div>    
            </div>
        )
    }
}

export default Password
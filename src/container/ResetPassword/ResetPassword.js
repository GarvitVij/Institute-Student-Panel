import React, { Component } from 'react';
import axios from '../../axios'
import classes from './ResetPassword.module.css'
import ResetPasswordUI from '../../component/UI/ResetPassword/ResetPassword'
import {Redirect} from 'react-router-dom'

   class ResetPassword extends Component {
       state = {
           password: null,
           token: null,
           error: '',
           comfirmPassword: null,
           changed: false
       }

       handlePasswordChange = (value) => {
           this.setState({password: value })
       }

       handleConfirmPasswordChange = (value) => {
        this.setState({comfirmPassword: value })
        }

       componentDidMount(){
           if(!this.state.token){
            this.setState({token:this.props.match.params.id})
           }
       }

       updatePassword = (event) => {
           if(!this.state.password.length > 7){
                this.setState({error: 'Password Cannot be smaller than 7 characters'})
                return 0;
           }


           if(this.state.password !== this.state.comfirmPassword){
            this.setState({error: "passwords Didn't match"})
            return 0;
            }

            axios.patch('/api/student/auth/resetpwd/' + encodeURI(this.state.token), {password: this.state.password})
            .then(res => {
                alert("Password Changed Successfully !!")
                this.setState({changed: true})
            })
            .catch(err=> console.log(err))
       }

   render(){
       return (
        <div className={classes.Container}>
        <div className={classes.Background}></div>  
        <div className={classes.Layout}>
        {this.state.changed === true ? <Redirect to="/"/> : null}
        <ResetPasswordUI
        submit= {this.updatePassword}
        pwd={this.state.password}
        confirmPwd={this.state.comfirmPassword}
        handlePwdChange={this.handlePasswordChange}
        handleConfirmPwdChange={this.handleConfirmPasswordChange}
        />
        </div>    
        </div>
        )
   }
}

export default ResetPassword
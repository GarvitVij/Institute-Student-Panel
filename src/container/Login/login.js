import React, {Component} from 'react';
import LoginPage from '../../component/LoginPage/loginpage';
import classes from './login.module.css';
import axios from '../../axios';


class Login extends Component {
    state = {
        id: '',
        password: '',
        isInvalid: false
    }

 
    idChangeHandler = (event) => {
        this.setState({id: event.target.value});
    }
      
    passwordChangeHandler = (event) => {
        this.setState({password: event.target.value});
    }
     
    onLoginHandler = () => {
        axios.post("/api/student/auth/login", 
            {rollNumber: this.state.id, password: this.state.password},
            {withCredentials: true}
        ).then(res => {
            if(res.data.isSuccess === true){
                this.props.refresh()
            }
        }).catch(err => {this.setState({isInvalid: true})})
    }


    render() {  
        return (
            <div className={classes.Container}>
            <div className={classes.Background}></div>
                <div className={classes.Layout}>
                            <LoginPage 
                                email={this.state.id}
                                password={this.state.password}
                                idHandler={(event) => this.idChangeHandler(event)}
                                passwordHandler={(event) => this.passwordChangeHandler(event)}
                                loginHandler={() => this.onLoginHandler()}
                            />                        
                </div>
                </div>
                )
      }
}

export default Login;
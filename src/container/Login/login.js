import React, {Component} from 'react';
import LoginPage from '../../component/LoginPage/loginpage';
import classes from './login.module.css';
import Particles from "react-particles-js";
import PaperDesign from "../../component/UI/Paper/Paper"
import axios from 'axios';
import { Redirect, withRouter } from 'react-router-dom'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            isAuthenticated: false
        }
    }
      
      onHandleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.email) {
            return this.setState({ error: 'email is required' });
          }
        if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
          }
      }
      emailChangeHandler = (event) => {
         this.setState({email: event.target.value});
      }
      passwordChangeHandler = (event) => {
          this.setState({password: event.target.value});
      }
     
      onLoginHandler = () => {
        axios.post("//localhost:4000/api/student/auth/login", {rollNumber: this.state.email, password: this.state.password})
        .then(res =>  
        {
                localStorage.setItem("token", res.data.token )
                if(res.data.token){
                    this.props.toggleLoginHandler()
                }else {
                    this.setState = {
                        isAuthenticated: false
                   }
                }
        })
        .catch(err => console.error(err))
      }

      componentDidMount(){
          if(localStorage.getItem('token')){
              this.props.toggleLoginHandler()
          }
         

      }


      render() {     
          return (
            window.location.pathname !== "/" ? <Redirect exact to="/"></Redirect> :
              <div className={classes.Layout}>
                  <Particles 
                    params={{ 
                    particles: { 
                        number: { 
                        value: 230, 
                        density: { 
                            enable: true, 
                            value_area: 1200, 
                        }, 
                        opacity: {
                            value: 0.5,
                            anim: {
                                enable: true
                            }
                        },
                        
                    },
                    },

                    }}
                  /> 
                    <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                    }}
                    >
                      <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
                       <PaperDesign> 
                           <LoginPage 
                           email={this.state.email}
                           password={this.state.password}
                           handleSubmit ={(event) => this.onHandleSubmit(event)}
                           emailHandler={(event) => this.emailChangeHandler(event)}
                           passwordHandler={(event) => this.passwordChangeHandler(event)}
                           loginHandler={() => this.onLoginHandler()}/>
                       </PaperDesign>
                        </div>
                    </div>
              </div>
          )
      }
}

export default withRouter(Login);
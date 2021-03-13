import React, {Component} from 'react';
import Login from '../src/container/Login/login';
import Password from '../src/container/Password/Password';
import {Route, Switch} from 'react-router-dom';
import FourOFour from './utils/404/FourOFour'
import Layout from './hoc/layout'
import Cookies from 'js-cookie'; 

class App extends Component {
    
    state= {
      isAuthenticated: false
    }

    checkValidity = () => {
        if(Cookies.get('token')){
            this.setState({isAuthenticated: true})
        }
    }

    componentDidMount(){
        if(Cookies.get('token')){
            this.setState({isAuthenticated: true})
        }
    }

    render(){
        let route = (
            <Switch>
                <Route exact path="/forgot-password" component={Password}/>
                <Route exact path="/" render={()=><Login refresh={this.checkValidity} />} />
                <Route component={FourOFour} />
            </Switch>
        )

        if(this.state.isAuthenticated){
            route = <Layout />
        }

        return (
            <div>
                {route}
            </div>
        )
    }
}

export default App;

import React, {Component} from 'react';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import MenuIcon  from '@material-ui/icons/Menu';
import { AccountCircle } from '@material-ui/icons';
import Drawer  from "@material-ui/core/Drawer";
import Lists from '../src/component/UI/Lists/Lists';
import classes from './App.module.css'
import Home from './container/Home/home';
import Login from '../src/container/Login/login';
import Logout from '../src/container/Logout/logout';
import BackPay from '../src/container/BackExamPay/backexampay'
import PreviousReceipt from '../src/container/PreviousReceipt/previousreceipt';
import Notices from '../src/container/Notices/notices';
import Password from '../src/container/Password/Password';
import {Route, Switch} from 'react-router-dom';




class App extends Component {
    state= {
      isDrawerOpen: false,
      isAuthenticated: false
    }

    onDrawerOpenHandler = () => {
      this.setState({isDrawerOpen: true})
    }
  
    onDrawerCloseHandler = () => {
      this.setState({isDrawerOpen: false})
    }

    toggleLoginHandler = () => {
      if(localStorage.getItem('token')){
      this.setState({isAuthenticated : true})
      }else{
      this.setState({isAuthenticated: false})
      }
      }

    toggleLogoutHandler = () => {
      if(localStorage.getItem('token')){
        localStorage.clear('token')
        this.setState({isAuthenticated : false})
      }
    }


    render(){
      let authRoute = 
      ( 
      <Switch>
        <Route exact path="/forgot-password" component={Password}/>
        <Route 
          render={(props) => (
          <Login  toggleLoginHandler={this.toggleLoginHandler} />
        )} 
        />
      </Switch>
      )

 

      const token =  localStorage.getItem('token');
   
      if(this.state.isAuthenticated === true && token){
      authRoute = (
          <Switch>
          <Route exact path="/logout" render={(props) => (
            <Logout toggleLogoutHandler={this.toggleLogoutHandler} />
          )} />
          <Route  exact path="/home" component={Home} />     
          <Route  exact path="/back-pay" component={BackPay} />      
          <Route  exact path="/previous-receipt" component={PreviousReceipt}/>
          <Route  exact path="/notices" component={Notices} />
          <Route  component={Home} />
          </Switch>
      )
    }  


   return (
    <div className={classes.root}>
        <AppBar classes={{root : classes.appBarColor}} position="static">
               <Toolbar classes={{root: classes.appBarSettings}}>
                   <IconButton onClick={this.onDrawerOpenHandler} edge="start" className={classes.menuButton} aria-label="Burger Menu">
                       <MenuIcon className={classes.appBarIconSettings}/>
                   </IconButton>
                   <div>
                       <IconButton 
                            aria-label="User Profile Picture"
                            aria-controls="profile-picture"
                            aria-haspopup="false"
                       >
                        <AccountCircle className={classes.appBarIconSettings} />   
                       </IconButton>
                   </div>
               </Toolbar>
           <Drawer
                anchor="left"
                open={this.state.isDrawerOpen}
                onClose={this.onDrawerCloseHandler}
                classes={{root : classes.paper}}
            >
           <Lists/>
           </Drawer>
        </AppBar>   
        {authRoute} 
    </div>
  );
}
}

export default App;

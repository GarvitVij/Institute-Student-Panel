import React from 'react';
import {BasicTextFields} from '../UI/TextField/textfield';
import StudentImage from '../UI/ImagesEdit/Student/studentimage';
import {FormControl} from '@material-ui/core'; 
import classes from './loginpage.module.css'
import PaperDesign from '../UI/Paper/Paper'

const LoginPage = (props) => {
    return(
        <PaperDesign width="30%" isNotWidth={true}>
        <div className={classes.Login}>
         <div> 
           <FormControl>
            <StudentImage/>
            <BasicTextFields email={props.email} password={props.password} changeEmail={props.emailHandler} changePassword={props.passwordHandler} Submit={props.loginHandler}/>
           </FormControl>  
         </div>
         </div>  
        </PaperDesign>
    )
}

export default LoginPage;
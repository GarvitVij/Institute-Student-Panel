import React from 'react';
import {BasicTextFields} from '../UI/TextField/textfield';
import StudentImage from '../UI/ImagesEdit/Student/studentimage';
import {FormControl} from '@material-ui/core'; 

const LoginPage = (props) => {
    return(
        <div >
         <form> 
           <FormControl>
            <StudentImage/>
            <BasicTextFields email={props.email} password={props.password} changeEmail={props.emailHandler} changePassword={props.passwordHandler} Submit={props.loginHandler}/>
           </FormControl>  
         </form>  
        
        </div>
    )
}

export default LoginPage;
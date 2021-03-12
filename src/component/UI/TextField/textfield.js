import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField} from '@material-ui/core';
import {ButtonSizes} from '../Button/button'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '30ch',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
    },
  }));

  export const BasicTextFields = (props) => {
 
    const classes = useStyles();
  
    return (
      <form className={classes.root} Validate autoComplete="off">
        <TextField required={true} value={props.email} onChange={props.changeEmail} id="outlined-basic" type="text" label="Email" variant="outlined" />
        <TextField required={true} value={props.password} onChange={props.changePassword} id="outlined-basic" type="password" label="Password" variant="outlined" />
        <a href="/forgot-password" style={{justifyContent: "flex-start", color: "blue", textDecoration: "none"}}>Forgot Password??</a>
        <ButtonSizes Submit={props.Submit}></ButtonSizes>
      </form>
    );
  }
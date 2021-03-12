import React from 'react';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

export const ButtonSizes = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <Button variant="contained" size="large" color="primary" className={classes.margin} 
        onClick={props.Submit}>
          login
        </Button>
      </div>
    </div>
  )
}
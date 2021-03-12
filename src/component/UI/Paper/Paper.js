import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const PaperDesign = (props) => {

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
          },
        },
      }));
      


    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={23}> 
                {props.children}
            </Paper>
        </div>
    );
}

export default PaperDesign;

import React from 'react';
import {FormControl} from '@material-ui/core'; 
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    },
    margin: {
      margin: theme.spacing(1),
    }
  }));

const ForgotPassword = () => {
    const classes = useStyles();
    return (
      <div>
        <div className={classes.root}>
          <form >
            <FormControl className={classes.margin}>
              <Typography variant="h5" style={{fontWeight: 'bold'}}>Find your GTBPI account</Typography>
              <Typography variant="button" display="block" gutterBottom>Enter username.</Typography>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <AccountCircle />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="Write Here" />
                </Grid>
              </Grid>
            </FormControl>
          </form>
          <Button variant="contained" color="primary" style={{borderRadius: 4}}>Search</Button>
        </div>
          
        </div>
    )
}

export default ForgotPassword;
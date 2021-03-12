import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';


  const SemesterFee = () => {

    const useStyles = makeStyles({
        root: {
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start'
        },
      });
    
      const classes = useStyles();

      return (
           <Box className={classes.root}>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                 Sem II Exam Fee       
              </Typography>
            </CardContent>
           </Box>
      )
  }


  export default SemesterFee;
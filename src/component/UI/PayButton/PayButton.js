import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const PayButton = () => {

    const useStyles = makeStyles({
        root: {
            width: '100%',
            // maxWidth: 1400,
        },
    })

    const classes = useStyles();

    return (
       <Card className={classes.root}>
          <CardContent>
             <Typography variant="h6" gutterBottom>
                 To Be Paid
             </Typography>
          </CardContent>  
          <CardActions style={{justifyContent: 'center'}}>
          <Button style={{backgroundColor: "#63B8FF", borderRadius: 8, padding: "8px 20px",boxShadow: '0px 3px 15px 4px'}} variant="contained">
            PAY
          </Button>
          </CardActions>       
       </Card>
    )
}

export default PayButton;
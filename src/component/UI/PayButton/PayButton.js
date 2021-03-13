import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const PayButton = (props) => {

    const useStyles = makeStyles({
        root: {
            width: '100%',
            // maxWidth: 1400,
        },
        padding:{
            display:'flex',
            justifyContent:'space-between',
            padding: '1% 1.6%'
        }
    })

    const classes = useStyles();

    return (
       <Card className={classes.root}>
          <CardContent className={classes.padding}>
             <Typography variant="h6" gutterBottom>
                 To Be Paid
             </Typography>
             <Typography variant="h6" gutterBottom>
             ₹ {props.normalFee + props.backFee + props.lateFee}
         </Typography>
          </CardContent>  
          <CardActions style={{justifyContent: 'center'}}>
          <Button style={{backgroundColor: "#475BE3", borderRadius: 8, padding: "1% 3%", color:"white", margin:"1% 0% 2% 0%"}} variant="contained">
            <Typography variant="h5">Pay Now</Typography>
          </Button>
          </CardActions>       
       </Card>
    )
}

export default PayButton;
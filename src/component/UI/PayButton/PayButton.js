import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from '../../../axios'
import Logo from '../../../Assets/gtbpilogo.png'

const PayButton = (props) => {

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const data ={}
        if(props.semester){
            data.semester = props.semester
        }
        if(props.selectedSubjects){
            data.subjects = props.selectedSubjects
        }
        //  creating a new order
        const result = await axios.post("/api/student/fee/pay",data,{withCredentials: true});

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        // Getting the order details back
        const { amount, orderID, currency } = result.data.savedReceipt;
        const prefill = result.data.student

        const desc = `From ${prefill.name},${prefill.rollNumber} For ${orderID} `
         
        const options = {
            key: "rzp_test_urt5r4Gx9cVN9I", // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: prefill.name,
            description: desc ,
            image: { Logo },
            order_id: orderID,
            handler: async function (response) {
                const data = {
                    order_id:orderID,
                    success: {
                        razorpay_signature: response.razorpay_signature,
                        razorpay_payment_id: response.razorpay_payment_id
                    }

                };

                const result = await axios.post("/api/student/fee/validate", data,
                { withCredentials: true});

                alert("Payment went successful !");
            },
                prefill:{
                    name: prefill.name,
                    email: prefill.email,
                    contact: prefill.phoneNumber
                },
                theme: {
                    color: "#11b7a2",
                },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        paymentObject.on('payment.failed', async function (response){
            const data = {
                order_id: response.error.metadata.order_id,
                error: {
                    code: response.error.code,
                    decription:response.error.description,
                    source:response.error.source,
                    reason:response.error.reason,
                    payment_id:response.error.metadata.payment_id
                }
            };

            const result = await axios.post("/api/student/fee/validate", data,
            { withCredentials: true});

            alert("Payment was failed, Please try again ! if the money was deducted, Please contact institute")
        })
    }

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
          <Button style={{backgroundColor: "#475BE3", borderRadius: 8, padding: "1% 3%", color:"white", margin:"1% 0% 2% 0%"}} variant="contained" onClick={displayRazorpay}>
            <Typography variant="h5">Pay Now</Typography>
          </Button>
          </CardActions>       
       </Card>
    )
}

export default PayButton;
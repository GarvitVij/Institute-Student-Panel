import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import classes from './Receipt.module.css';


// function getModalStyle() {
//   const top = 50;
//   const left = 50;

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }


// const [modalStyle] = React.useState(getModalStyle);
// const [open, setOpen] = React.useState(false);



const body = (
  <div className={[classes.pax , classes.modal]}>
    <h2 >Subject Change</h2>
    <p>
     DS And Algo  change to Math And Electrical Engg..
    </p>
  </div>
);


class  Receipt extends React.Component{
      constructor(props){
        super(props)
        const receiptData = this.props.receiptData
        this.state = {
           receiptData : receiptData,
           setOpen: false
        }
      }  

      handleOpen = () => {
        this.setState({setOpen: true})
      }
      
      handleClose = () => {
        this.setState({setOpen: false})
      };


      componentDidUpdate = () => {
        if(Object.keys(this.state.receiptData).length == 0){
            if(this.props.receiptData.length == 0 ){
                this.setState({receiptData: this.props.receiptData}) 
            }
        } 
      }

      render() {
        return (
          <div className={classes.root}>
            <Accordion>
              <Box className={classes.boxColor} border={2} borderRadius={0} borderLeft={0} borderRight={0} marginTop="20px">
               <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel1c-content"
               id="panel1c-header"
                classes={{
                    content: classes.display
                }}
               >
               <div className={classes.column}>
                <Typography className={classes.heading}>For Sem: II SEM</Typography>
                <Typography className={classes.heading}>Payment: Debit Card</Typography>
               </div>
            
                <div className={classes.column}>
                  <Typography className={classes.heading}>ID: 12349</Typography>
                  <Typography className={classes.heading}>Valid: Yes</Typography>
                </div>
               </AccordionSummary>
              </Box>
            
            <Box className={classes.boxExpanded}>
             <AccordionDetails style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}} className={classes.lowercolumn}>
                <Box className={[classes.paper, classes.column]}>
                 <Typography >For Sem: II SEM And Back Exams</Typography>
                 <Typography>ID: 12349</Typography>
                 <Typography>Payment: Debit Card</Typography>
                 <Typography>Valid: No</Typography>
                 <Button  style={{boderRadius: 10}} variant="contained" color="secondary">
                  DOWNLOAD RECEIPT
                  </Button>
                </Box>

                <Box >
                 <Typography>Back Exams: DS And Algo </Typography>
                 <Button  style={{boderRadius: 10}} variant="contained" color="secondary" onClick={this.handleOpen} >
                  CHANGE SUBJECT
                  </Button>
                </Box>
              
    
             </AccordionDetails>
            </Box>
            </Accordion>
            <Modal
                    open={this.state.setOpen}
                    onClose={this.handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                  >
                    {body}
                </Modal>
          </div>
        )  
    }
  }


export default Receipt;
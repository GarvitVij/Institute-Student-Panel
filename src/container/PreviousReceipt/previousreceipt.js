import React, { Component } from 'react';
import classes from './previousreceipt.module.css';
import PaperDesign from '../../component/UI/Paper/Paper';
import Receipt from '../../component/UI/Receipt/Receipt';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from 'axios';


class PreviousReceipt extends Component {
    state = {
        // isDrawerOpen: false,
        receiptData: {}
    }
  
    
    // onDrawerOpenHandler = () => {
    //   this.setState({isDrawerOpen: true})
    // }
  
    // onDrawerCloseHandler = () => {
    //   this.setState({isDrawerOpen: false})
    // }
  
    componentDidMount = () => {
       if(Object.keys(this.state.receiptData).length === 0){
         axios.get("//localhost:4000/api/student/fee/getAll",{
          headers: {'Authorization': localStorage.getItem('token')}
        })
        .then(res => {
          console.log(res.receiptData)
        })
        .catch(err => {
          console.log(err)
        })
       }
    }

    render() {
        return (
            <div className={classes.Layout}>
              <PaperDesign >
                <PaperDesign>
                  <Box border={3} borderRight={3}  borderLeft={3} borderRadius={8}>
                    <PaperDesign> 
                      <Typography variant="h5" gutterBottom>Receipts</Typography>
                      <Receipt receiptData={this.state.receiptData}/>
                    </PaperDesign>
                  </Box>
                </PaperDesign>
              </PaperDesign>
            </div>
        )
    }
  }

  export default PreviousReceipt;
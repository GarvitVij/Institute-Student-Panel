import React, { Component } from 'react';
import classes from './previousreceipt.module.css';
import PaperDesign from '../../component/UI/Paper/Paper';
import Receipt from '../../component/UI/Receipt/Receipts';
import Typography from '@material-ui/core/Typography';
import axios from '../../axios';


class PreviousReceipt extends Component {
    state = {
        receiptData: [],
        allowedSubjects: []
    }
  
    componentDidMount = () => {

        if(this.state.receiptData.length === 0 ){
            axios.get("/api/student/fee/getAll", {withCredentials: true})
            .then(res => this.setState({receiptData: res.data.receipts, allowedSubjects: res.data.subjects}))
            .catch(err => console.log(err))
        }
    }

    render() {
        return (
            <div className={classes.Layout}>
                    <PaperDesign> 
                      <Typography variant="h2" align="center" gutterBottom>Receipts</Typography>
                      <Receipt receiptData={this.state.receiptData} allowedSubjects={this.state.allowedSubjects}/>
              </PaperDesign>
            </div>
        )
    }
  }

  export default PreviousReceipt;
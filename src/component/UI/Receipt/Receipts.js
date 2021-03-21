import React from 'react';
import Receipt from './Receipt/Receipt'
import classes from './Receipts.module.css';
import Modal from '@material-ui/core/Modal';

class  Receipts extends React.Component{

      render() {
        return (
          <div className={classes.root}>
          {this.props.receiptData.map(receipt =>
            <Receipt {...receipt} subjects={this.props.allowedSubjects}/>
          )}
          </div>
        )  
    }
  }


export default Receipts;
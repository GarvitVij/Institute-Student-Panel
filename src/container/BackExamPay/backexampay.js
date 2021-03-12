import React, {Component} from 'react'
import classes from './backexampay.module.css';
import PaperDesign from '../../component/UI/Paper/Paper';
import BackFee from '../../component/UI/BackExamFee/BackExam';
import PayButton from '../../component/UI/PayButton/PayButton';
import Box from '@material-ui/core/Box';
import axios from 'axios';

class BackExamPay extends Component {
    state = {
        // isDrawerOpen: false,
        data: {}
    }
  
    
    // onDrawerOpenHandler = () => {
    //   this.setState({isDrawerOpen: true})
    // }
  
    // onDrawerCloseHandler = () => {
    //   this.setState({isDrawerOpen: false})
    // }
  
    componentDidMount = () => {
      if(Object.keys(this.state.data).length == 0){
        axios.get("//localhost:4000/api/student/get/", {
          headers: {'Authorization': localStorage.getItem('token')}
        })
         .then(res => 
          {
            console.log(res.data)
          res.data.subjects.forEach((sub,index) => {
            let array = []
            console.log(res.data)
            sub.subjects.map((subject)=>{
              array.push({checked: false, name: subject})
            })
            console.log(res.data) 
            res.data.subjects[index].subjects = array
            })
            console.log(res.data)  
          this.setState({data: res.data})
          })
          .catch(err => console.log(err))
      } 
    }
    render() {
        return (
            <div className={classes.Layout}>
                <PaperDesign >
                 <PaperDesign >
                  <Box border={3}  borderRadius={8}>
                   <PaperDesign>
                    <BackFee data= {this.state.data}/>
                    <br/>
                    <PayButton/>
                   </PaperDesign>
                  </Box>
                 </PaperDesign>
                </PaperDesign>
            </div>
        )
    }
  
  }
  
  export default BackExamPay;
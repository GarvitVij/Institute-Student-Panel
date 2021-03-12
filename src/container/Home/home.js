import React, {Component} from 'react';
// import Appbar from '../../component/UI/Appbar/Appbar';
import classes from './home.module.css';
// import Drawer from '../../component/UI/Drawer/Drawer';
import PaperDesign from '../../component/UI/Paper/Paper';
import Fee from '../../component/UI/SemesterExamFee/Fee';
import BackFee from '../../component/UI/BackExamFee/BackExam';
import PayButton from '../../component/UI/PayButton/PayButton';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';


class HomeLogin extends Component {
  
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
    console.log(this.state.data)
      return (
          <div className={classes.Layout}>
              <PaperDesign> 
                <PaperDesign >
                <Box border={3}  borderRadius={8}>
                  <PaperDesign>
                    <Fee/>
                    <br/>
                    <BackFee data= {this.state.data}/>
                    <br/>
                    <Box border={2} borderTop={0} borderRight={0} borderLeft={0} >
                      <Typography variant="h6" gutterBottom style={{width: '100%', display: 'flex', justifyContent: 'center'}}>Late Exam Fee is 100 </Typography>
                    </Box>
                    <PayButton/>
                   </PaperDesign>
                   </Box>
                </PaperDesign>
              </PaperDesign> 
          </div>
      )
  }

}

export default HomeLogin;
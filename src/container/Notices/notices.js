import React, {Component} from 'react';
// import Appbar from '../../component/UI/Appbar/Appbar';
import classes from './notices.module.css';
// import Drawer from '../../component/UI/Drawer/Drawer';
import PaperDesign from '../../component/UI/Paper/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

class Notices extends Component {
    // state = {
    //     isDrawerOpen: false,
    // }
  
    
    // onDrawerOpenHandler = () => {
    //   this.setState({isDrawerOpen: true})
    // }
  
    // onDrawerCloseHandler = () => {
    //   this.setState({isDrawerOpen: false})
    // }

    render () {
        return (
            <div  className={classes.Layout}>
              <PaperDesign> 
                <PaperDesign >
                <Box border={3}  borderRadius={8}>
                  <PaperDesign>
                      <Box border={1} borderRadius={8}>
                        <Typography variant="h6" gutterBottom>
                             Kindly, Pay the Exam fees before 13/05/2021,
                             else you have to pay late fee also.
                        </Typography>
                      </Box>

                      <Box border={1} borderRadius={8}>
                        <Typography variant="h6" gutterBottom>
                              Exam will be held on 25/05/2021,
                              Best of luck for your exams.                   
                        </Typography>
                      </Box>

                      <Box border={1} borderRadius={8}>
                        <Typography variant="h6" gutterBottom>
                             Collect your admit card from 
                             examination cell before 25/05/2021
                        </Typography>
                      </Box>

                      <Box border={1} borderRadius={8}>
                        <Typography variant="h6" gutterBottom>
                             Kindly submit your all books,
                             to library to take your admit card.                  
                        </Typography>
                      </Box>

                      <Box border={1} borderRadius={8}>
                        <Typography variant="h6" gutterBottom>
                             Your next semester will start
                             from first week of August                    
                        </Typography>
                      </Box>

                      <Box border={1} borderRadius={8}>
                        <Typography variant="h6" gutterBottom>
                             Pay your next semester fee as 
                             soon as possible               
                        </Typography>
                      </Box>

                      <Box border={1} borderRadius={8}>
                        <Typography variant="h6" gutterBottom>
                              Exam will be held on 25/05/2021,
                              Best of luck for your exams.                   
                        </Typography>
                      </Box>
                    
                   </PaperDesign>
                   </Box>
                </PaperDesign>
              </PaperDesign> 
            </div>
        )
    }
}

export default Notices
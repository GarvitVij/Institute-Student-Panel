import React, {Component} from 'react';
import PaperDesign from '../../component/UI/Paper/Paper';
import Fee from '../../component/UI/SemesterExamFee/Fee';
import BackFee from '../../component/UI/BackExamFee/BackExam';
import PayButton from '../../component/UI/PayButton/PayButton';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import LateFee from '../../component/UI/LateFee/LateFee'
import axios from '../../axios';




class HomeLogin extends Component {
  
    state = {
        student: {},
        subjects: {},
        fees: {},
        contentFailed: false,
        selectedSubjects: [],
        examFee: 0,
        backExamFee: 0,
        lateFee: 0
    }

    componentDidMount(){
        const isStudent =  this.state.student && Object.keys(this.state.student).length === 0 && this.state.student.constructor === Object
        const isSubjects =  this.state.subjects && Object.keys(this.state.subjects).length === 0 && this.state.subjects.constructor === Object
        const isFee =   this.state.fees && Object.keys(this.state.fees).length === 0 && this.state.fees.constructor === Object   
        if(isStudent && isSubjects && isFee){
                axios.get('/api/student/get/',{withCredentials: true})
                .then(res=> {
                        res.data.subjects.forEach((sub,index) => {
                        let array = []
                        sub.subjects.forEach((subject)=>{
                          array.push({checked: false, name: subject})
                        })
                        res.data.subjects[index].subjects = array
                        })
                        const price = res.data.student.hasPaid === false ? res.data.fees.normalFee : 0
                        //Checking for late fee
                        const now = Date.now()
                        const isLate = now < this.props.minLateFeeDate ? 0 : now < this.props.maxLateFeeDate ? 1 : 2 
                        const minLateFee = res.data.fees.minLateFee
                        const maxLateFee = res.data.fees.maxLateFee
                        const lateFee = isLate === 0 ? 0 : isLate === 1 ? minLateFee : maxLateFee  
                        this.setState({student: res.data.student, subjects: res.data.subjects, fees: res.data.fees, examFee: price, lateFee: lateFee})
                    })
                .catch(err => {this.setState({contentFailed: true})})  
            }
    }

    handleSubjectChange = (event, id) => {
        id = parseInt(id)
        const Subject = this.state.subjects.find((key) => key.semester === id);
        const sub = { ...Subject, subjects: [...Subject.subjects] };
        sub.subjects.forEach((subject) => {
            if (subject.name === event.target.name) {
                subject.checked = event.target.checked;
            }
        });
        let price = 0;
        this.state.subjects.forEach((keys) => {
            let checked = 0;
            keys.subjects.forEach((key) => {
                if (key.checked === true) {
                    checked = checked + 1;
                }
            });
            if (checked > 3) {
                price = price + this.state.fees.maxPerSemesterFee;
            } else {
                price = price + checked * this.state.fees.backExamFee ;
            }
        });

        let Ssubjects = { ...this.state.subjects };
        let updatedSu = [];
        for (const property in Ssubjects) {
            if (Ssubjects[property].semester === sub.semester) {
                Ssubjects[property] = sub;
                updatedSu.push(Ssubjects[property]);
            } else {
                updatedSu.push(Ssubjects[property]);
            }
        }

        let selectedBackExams = []

         updatedSu.forEach((subjects,index) => {
            const selectedSubjects = subjects.subjects.map(sub => {if(sub.checked === true){
                return sub.name
            }}).filter(subject => subject )
            if(selectedSubjects.length > 0){
                    const obj = {}
                    obj.semester = updatedSu[index].semester
                    obj.subjects = selectedSubjects
                    selectedBackExams.push(obj)
                }
            }
        )

        this.setState({ backExamFee: price, selectedSubjects: selectedBackExams });
    };




    render() {
    
        return (
            <PaperDesign> 
                <Typography align="center" variant="h4">Pay Semester Fee</Typography>
                    <Fee semester={this.state.student.currentSemester} semesterFee={this.state.fees.normalFee}/>
                    <BackFee subjects= {this.state.subjects || []} handleChange={this.handleSubjectChange} price={this.state.backExamFee}/>
                    <Box border={2} borderTop={0} borderRight={0} borderLeft={0} >
                    <LateFee 
                    minLateFeeDate={this.state.fees.minLateFeeDate}
                    maxLateFeeDate={this.state.fees.maxLateFeeDate}
                    minLateFee={this.state.fees.minLateFee}
                    maxLateFee={this.state.fees.maxLateFee}
                    lateFee={this.state.lateFee}
                    />
                    </Box>
                <PayButton
                    normalFee={this.state.examFee || 0}
                    backFee={this.state.backExamFee || 0}
                    lateFee={this.state.lateFee || 0}
                />
            </PaperDesign> 
        )
    }
}

export default HomeLogin;
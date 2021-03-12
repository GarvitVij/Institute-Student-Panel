import React from 'react';
import Accordion from './Accordion/Accordion'
import Checkbox from '../../../container/CheckBox/checkbox';

// import axios from 'axios';

class BackFee extends React.Component {
      constructor(props){
        super(props)
        const data = this.props.data
        this.state = {
          data: data,
          price: 0,
      }
      }
       

      handleChange = (event, id) => {
        const Subject = this.state.data.subjects.find((key) => key.semester === id);
        const sub = { ...Subject, subjects: [...Subject.subjects] };
        sub.subjects.map((subject) => {
          if (subject.name === event.target.name) {
            subject.checked = event.target.checked;
          }
        });
        let price = 0;
        this.state.data.subjects.map((keys) => {
          let checked = 0;
          keys.subjects.map((key) => {
            if (key.checked === true) {
              checked = checked + 1;
            }
          });
          if (checked > 3) {
            price = price + 400;
          } else {
            price = price + checked * 100;
          }
        });
    
        let Ssubjects = { ...this.state.subjects };
        console.log(typeof Ssubjects);
        // console.log(Ssubjects.map((el) => console.log(el)));
        // console.log(Ssubjects.findIndex((el) => el.semester === sub.semester));
        const updatedSu = [];
        for (const property in Ssubjects) {
          if (Ssubjects[property].semester === sub.semester) {
            Ssubjects[property] = sub;
            updatedSu.push(Ssubjects[property]);
          } else {
            updatedSu.push(Ssubjects[property]);
          }
        }
    
        console.log(updatedSu);
    
        this.setState({ price: price, subjects: updatedSu });
      };
    

      componentDidUpdate = () => {
        if(Object.keys(this.state.data).length == 0){
            if(this.props.data === {}){
                this.setState({data: this.props.data}) 
            }
         
        } 
      }

      
    render() {

      console.log(this.state.data)

      let array = this.state.data.subjects ? this.state.data.subjects : []
      // const boxes = array.map(key => <Checkbox value={key.value} sub={key.sub} handleChange={this.handleChange}/>)
      const boxes = array.map((keys) => {
        const made = keys.subjects.map((key) => (<Checkbox value={key.checked} sub={key.name} semester={keys.semester} handleChange={this.handleChange}/>));
        return made;
      });
  
       let price = this.state.price
      // array.forEach(key => {if(key.value && price !== 400){price = price + 100} })

        return(
            <Accordion heading="Back Exam Fee" price={price}>
            {boxes}
            </Accordion>
        )
    }
}

export default BackFee;


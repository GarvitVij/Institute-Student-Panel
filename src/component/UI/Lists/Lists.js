import React from 'react';
import Avatar from '../Avatar/Avatar';
import List from '@material-ui/core/List';
import IconList from './List/List';

const listItems = [
    {
        label: "Home",
        icon: "HomeIcon",
        link: "/home"
    }, {
        label: "Back Exam Pay",
        icon: "AssignmentIcon",
        link: "/backExam-Pay"
    }, {
        label: "Previous Receipt",
        icon: "ReceiptIcon",
        link: "/previous-receipt"
    }, {
        label: "Notices",
        icon: "Notices",
        link: "/notices"
    }, {
        label: "Logout",
        icon: "ExitToAppIcon",
        link: "/logout"
    }
]

const Lists = (props) => {    
    return(
    <div >
    {props.children}
    <Avatar/>
    
        <List >
         <IconList/>
            {listItems.map(list => {
                return (<IconList key={list.label} name={list.label} icon={list.icon} link={list.link}/>)
            })} 
        </List>
    </div>
)
}

export default Lists;
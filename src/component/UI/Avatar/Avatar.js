import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';

const Avatars = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        large: {
          width: theme.spacing(10),
          height: theme.spacing(10),
          color: props.color
        },
        center: {
            display:'flex',
            justifyContent:'center',
            margin: props.margin
        },
        edit: {
          color: process.env.REACT_APP_ICON_COLOR,
          margin: "15vh 0"
        }
    }));
    
    const classes = useStyles();

    return (
        <div className={classes.center}>
            <Avatar className={classes.large}>
                <AccountCircleIcon className={[classes.large , classes.edit]}/>
            </Avatar>
        </div>
    )
}

export default Avatars;
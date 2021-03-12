// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { AppBar } from '@material-ui/core';
// import { Toolbar } from '@material-ui/core';
// import { IconButton } from '@material-ui/core';
// import MenuIcon  from '@material-ui/icons/Menu';
// import { AccountCircle } from '@material-ui/icons';

// const MenuAppbar = (props) => {

//     const useStyles = makeStyles((theme) => ({
//         root: {
//             flexGrow: 1,
//         },
//         menuButton: {
//             marginRight: theme.spacing(2)
//         },
//         appBarSettings: {
//             height: '12vh',
//             justifyContent: 'space-between'
//         },
//         appBarIconSettings: {
//             fontSize: '7vh',
//             color: 'black'
//         },
//         appBarColor: {
//             background: 'white'
//         }
//     }
//     ));

//     const classes = useStyles();

//     return (
//         <div className={classes.root} >
//             <AppBar className={classes.appBarColor} position="static" >
//                <Toolbar className={classes.appBarSettings}>
//                    <IconButton onClick={props.drawerOpenhandler} edge="start" className={classes.menuButton} aria-label="Burger Menu">
//                        <MenuIcon className={classes.appBarIconSettings}/>
//                    </IconButton>
//                    <div>
//                        <IconButton 
//                             aria-label="User Profile Picture"
//                             aria-controls="profile-picture"
//                             aria-haspopup="false"
//                        >
//                         <AccountCircle className={classes.appBarIconSettings} />   
//                        </IconButton>
//                    </div>
//                </Toolbar>
//             </AppBar>
//         </div>
//     )

// }

// export default MenuAppbar;
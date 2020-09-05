import React from 'react'
import "./Login.css";
import Button from '@material-ui/core/Button';
import Logo from "../Images/Logo.png";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
      },
    },
  }),
);
function Login() {
    const classes = useStyles();
    return (
      <>
     
        <div className="Header">
            <img className="soa-logo" src={Logo} alt="soa" />
            <p className="login__name">SOA University</p>
            <p className="sub-heading">Ranked as 20th Best University in India</p>
        </div>
        
        <div className="main-div">
        <h1 className="text-login">Log In</h1>
      <div className="textfield1">
        <form className={classes.root} noValidate autoComplete="off">
           <TextField id="email" label="Email" />
           <TextField id="password" label="Password" />
        </form>
      </div>
       </div>
        <div className="form-check footer-div">
					<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
					<label className="form-check-label" for="defaultCheck1">
						Remember me
					</label>
			  	<a rel="Forgot password" href="#">Forgot Password?</a>
         </div>
         <Button variant="contained" color="primary">Log In</Button>
               
      
      </>
    )
}

export default Login

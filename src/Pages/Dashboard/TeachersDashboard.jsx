import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import "./TeachersDashboard";

const useStyles = makeStyles((theme) => ({
    cardRoot: {
        width: '30%',
        borderRadius: '10px',
        border: '0.5px solid rgba(223,225,230, 0.5)',
    },
    upperDiv: {
        backgroundColor: 'rgba(38, 132, 255, 0.32)',
        height: '200px'
    },
    lowerDiv: {
        marginLeft: '75px'
    },
    profile: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        width: 'max-content'
    },
    circle: {
        backgroundColor: '#0052cc',
        width: 150,
        height: 150,
        borderRadius: '78px',
        border: '3px solid white',
        marginTop: '-78px',
    },
    iconSize: {
        fontSize: 'large',
    },
    title1: {
        fontSize: 12.5,
        color: '#172b4d',
        fontWeight: 500,
        marginTop: '6%'
    },
    title2: {
        fontSize: 12,
        color: "#172b4d",
        fontWeight: 300,
        display: 'flex',
        lineHeight: '200%'
    },
    hrLine: {
        borderTop: "1px solid #EBECF0",
        marginBottom: '4%',
    },
    paperLeft: {
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
        borderRadius: '10px',
        border: '0.5px solid rgba(223,225,230, 0.5)',
    },
    paperRight: {
        padding: theme.spacing(1),
    },
}));

function TeachersDashboard() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.upperDiv}>
            </div>
            <div className={classes.lowerDiv}>
                <div className={classes.profile}>
                    <div className={classes.circle} >
                    </div>
                    <Typography variant="h5" gutterBottom>
                        Dr. Tripti Swarnakar
                    </Typography>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Paper elevation={0} className={classes.paperLeft}>
                            <Typography className={classes.title1} gutterBottom>
                                About
                            </Typography>
                            <div className={classes.hrLine} ></div>
                            <Typography className={classes.title2} gutterBottom>
                                <Icon color="inherit"><WorkOutlineOutlinedIcon className={classes.iconSize} /></Icon>
                                Professor and HoD
                            </Typography>
                            <Typography className={classes.title2} gutterBottom>
                                <Icon color="inherit"><AccountTreeOutlinedIcon className={classes.iconSize} /></Icon>
                                Department of Computer Application
                            </Typography>
                            <Typography className={classes.title2} gutterBottom>
                                <Icon color="inherit"><AccountBalanceOutlinedIcon className={classes.iconSize} /></Icon>
                                Institute of Technical Education & Research
                            </Typography>
                            <Typography className={classes.title2} gutterBottom>
                                <Icon color="inherit"><RoomOutlinedIcon className={classes.iconSize} /></Icon>
                                Room No 203, Campus 1
                            </Typography>
                            <Typography className={classes.title1} gutterBottom>
                                Contact
                            </Typography>
                            <div className={classes.hrLine} ></div>
                            <Typography className={classes.title2} gutterBottom>
                                <Icon color="inherit"><MailOutlineIcon className={classes.iconSize} /></Icon>
                                tripti.swarnakar@soa.ac.in
                            </Typography>
                            <Typography className={classes.title2} gutterBottom>
                                <Icon color="inherit"><CallOutlinedIcon className={classes.iconSize} /></Icon>
                                94390-94390
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper elevation={0} className={classes.paperRight}>
                            <Typography className={classes.title2} gutterBottom>
                                My Upcoming Task
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default TeachersDashboard
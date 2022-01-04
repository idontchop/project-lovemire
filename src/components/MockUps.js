import styled from 'styled-components'
import React, {useEffect, useState} from 'react';
import { LinearProgress, Button, Label, TextField, Card, Typography, CardContent, CardActions, InputAdornment, Link} from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import AccountCircle from '@material-ui/icons/AccountCircle';
import {useSpring, animated} from 'react-spring'

import { makeStyles } from '@material-ui/core/styles';
import { SettingsSystemDaydreamRounded } from '@material-ui/icons';

const MockUps = (props) => {

      const [activeStep, setActiveStep] = useState(0);
      const [isNewFeedback, setNewFeedback] = useState(false)
      const [feedbackPayload, setFeedbackPayload] = useState({})

      const maxSteps = props.data.length;

      const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

    const handleFeedbackChange = (e) => {
      setNewFeedback(true)
      setFeedbackPayload( prev => {
        let newFeedback = {...prev}
        newFeedback[e.target.name] = e.target.value
        return newFeedback
      })
    }
    
    useEffect ( () => {
      setFeedbackPayload( prev => {
        let newFeedback = {...prev}
        newFeedback["name"] = props.user.title
        return newFeedback
      })
    },[props])

    useEffect ( () => {
      setFeedbackPayload( prev => {
        let newFeedback = {...prev}
        newFeedback["title"] = props.data[activeStep].title
        return newFeedback
      })
    }, [activeStep])

    return (<Grid item>
        <animated.div style={props.springStyles}>
        <Card className={props.theme.wideCard} style={{backgroundColor: "rgba(255, 247, 247, 0.6)"}}>
        <CardContent>
          <Typography gutterBottom variant="h5">Mock Ups</Typography>
          <Typography gutterBottom>Mock Ups are designs in progress.</Typography>
          <Typography gutterBottom>They are used to determine proper direction in the app before coding it. Feedback is appreciated.</Typography>
        </CardContent>

        <MobileStepper
            steps={maxSteps}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                Next
            </Button>
            }
            backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                Back
            </Button>
            }
        />
        <CardContent>
            <Paper square elevation={0}>
                <Typography variant="h5">{props.data[activeStep].title}</Typography>
                <a href={props.data[activeStep].url}><Typography variant="p">{props.data[activeStep].url}</Typography></a>
                            </Paper>
             {!!props.data[activeStep].img && <a href={props.data[activeStep].url}>
                <img style={{maxWidth: "80%", objectFit: "fill", margin: "auto", display: "block"}}
                src={props.data[activeStep].img}
              /></a>}
              {!!props.data[activeStep].description && <Typography variant="p" className="clear">{props.data[activeStep].description}</Typography>}

        </CardContent>
        <form onSubmit={e => {e.preventDefault(); setNewFeedback(false); props.feedbackSubmit(feedbackPayload)}}>
          <Card className={props.theme.widecard}>
            <CardContent>
              <Grid container direction="column">
                <Grid item>
              <Typography gutterBottom variant="h5">FeedBack</Typography>
              <TextField className="clear" name="title" defaultValue={props.data[activeStep].title}
                label="Title" onChange={ e => handleFeedbackChange(e)} />
              <TextField className="clear" name="name" defaultValue={props.user.title}
                label="Name"
                onChange={ e => handleFeedbackChange(e)}/>
                </Grid>
                <Grid item>
              <TextField style={{width: '90%'}} className="clear" name="feedback"
                label="Feedback" multiline rows={3} maxRows={10}
                onChange={ e => handleFeedbackChange(e)} />
                </Grid>
                <Grid item>
                <CardActions>
                  <Button className="clear" 
                    variant="contained" 
                    color="primary" 
                    type="submit"
                    >{!isNewFeedback && !!props.submitText && props.submitText != "" ?
                     props.submitText : 'Submit!'}</Button>
                </CardActions>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </form>

        </Card>
        </animated.div>
        </Grid>)
}

export default MockUps;
import styled from 'styled-components'
import React, {useEffect, useState} from 'react';
import { LinearProgress, Button, Label, TextField, Card, Typography, CardContent, CardActions, InputAdornment, Link} from '@material-ui/core'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@material-ui/core/Grid';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import AccountCircle from '@material-ui/icons/AccountCircle';
import {useSpring, animated} from 'react-spring'

import { makeStyles } from '@material-ui/core/styles';

const AllTester = (props) => {

    const tutorialSteps = [
        {
          label: 'Core Development',
          list: [{
            primary: "FeedBack",
            secondary: "The primary requested information from testers at this stage is on the structure of the app and intended business design."
          }, { 
            primary: "white screen, endless loading, error message, unexpected results",
            secondary: "An error of this type is likely the result of encountering unfinished development. At this point, please do not fight the error or report it. User Testing will begin in next development phase."
          }, {
            primary: "grid lines, color theme, interface alignment",
            secondary: "Theme and User Experience flow is being developed seperately and will be applied to the app prototype in the second development phase. In Core Development, interface components are often quickly added to test backend communication and component integration."
          }]
        }
      ];

      const [activeStep, setActiveStep] = useState(0);
      const maxSteps = tutorialSteps.length;

      const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

    return (<Grid item>
        <animated.div style={props.springStyles}>
        <Card className={props.theme.wideCard} style={{backgroundColor: "rgba(255, 247, 247, 0.6)"}}>
        <CardContent>
          <Typography gutterBottom variant="h5">Current State: CORE DEVELOPMENT</Typography>
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
                <Typography variant="h5">{tutorialSteps[activeStep].label}</Typography>
            </Paper>
            <List>
              {tutorialSteps[activeStep].list.map ( (v) => {
                return <ListItem>
                  <ListItemText primary={v.primary}
                  secondary={v.secondary} />
                </ListItem>
              })}
            </List>
            
        </CardContent>

        </Card>
        </animated.div>
        </Grid>)
}

export default AllTester;
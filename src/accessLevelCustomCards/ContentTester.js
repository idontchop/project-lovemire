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

const ContentTester = (props) => {

    const tutorialSteps = [
        {
          label: 'Navigate to My Profile',
          imgPath:
            '/images/MyProfile.png',
        },
        {
            label: 'Touch Add Post Button',
            imgPath:
              '/images/AddPost.png',
        },
        {
            label: 'Add a pic of yourself!',
            imgPath:
              '/images/FirstImage.png',
        },
        {
            label: 'Add a second image!',
            imgPath:
              '/images/SecondImage.png',
        },
        {
            label: 'Add a provacative secret image!',
            imgPath:
              '/images/SecretImage.png',
        },
        {
            label: 'Adjust the preview blur and click Save Secret',
            imgPath:
              '/images/SaveSecret.png',
        },
        {
            label: 'Remember to hit Post Live!',
            imgPath:
              '/images/PostLive.png',
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
          <Typography gutterBottom variant="h5">Content Tester Tips</Typography>
          <Typography gutterBottom>Thank you for helping us test by providing content!</Typography>
          <Typography gutterBottom>Primarily, we need attractive posts that might assist us to see how individual users might browse posts.</Typography>
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
            <img style={{maxheight: "400px", width: "100%", objectFit: "fill", margin: "auto", display: "block"}}
                src={tutorialSteps[activeStep].imgPath}
            />
        </CardContent>

        </Card>
        </animated.div>
        </Grid>)
}

export default ContentTester;
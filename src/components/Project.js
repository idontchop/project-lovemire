import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { Button, Label, TextField, Card, Typography, CardContent, CardActions, InputAdornment, Link} from '@material-ui/core'
import Accordian from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {useSpring, animated} from 'react-spring'

import { makeStyles } from '@material-ui/core/styles';

/**
 * Hopefully will be moved to server at some point
 */
const projectManagement = [
    { id: 1, name: "phase-one", title: "Phase One", subTitle: "Back end development, UI Structure",
    active: true, progress: "10%",
    description: "Early development phase consists of Backend Design and Development along with a simple UI structure to allow test users to navigate data."},

    { id: 2, name: "phase-two", title: "Phase Two", subTitle: "Front end UI Remodel and Testing",
    description: "Using data from phase two, focus on developing a user-friendly, fast, and appealing Progressive Web App."}

]

const accordianStyle = {
    maxWidth: "750px",
    margin: "5px 10px",
    boxShadow: "0 0 4px rgb(134, 136, 139)"
}

const activeStyle = {
    backgroundColor: "rgba(97, 204, 90,0.8)"
}

const upcomingStyle = {
    backgroundColor: "rgb(214, 214, 214, 0.6)"
}


const Project = (props) => {



    return (<>
        {projectManagement.map( e => <Accordian key={e.id} style={accordianStyle}>
            <AccordionSummary  style={e.active ? activeStyle : upcomingStyle } expandIcon={<ExpandMoreIcon />}>
                <Typography className={props.theme.accordianHeading}>{e.title}</Typography>
                <Typography className={props.theme.accordianSubHeading}>{e.subTitle}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{e.description}</Typography>
            </AccordionDetails>
        </Accordian>)}

    </>)

}

export default Project
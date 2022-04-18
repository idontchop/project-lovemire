import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { LinearProgress, Button, Label, TextField, Card, Typography, CardContent, CardActions, InputAdornment, Link} from '@material-ui/core'
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
    { id: 1, name: "phase-one", title: "CORE DEVELOPMENT", subTitle: "Back end development, UI Structure",
    active: true, progress: 10,
    description: ["Early development phase consists of Backend Design and Development along with a simple UI structure to allow test users to navigate data.",
                "Project Lovemire is being developed with consideration for sudden high traffic loads with Microservice Architecture. During core development, these microservices will be " +
                "operated on a server running docker behind a standard cable connection.",
                "Technologies in use during this phase",
                <ul>
                    <li>Ubuntu / Docker</li>
                    <li>Apache Kafka</li>
                    <li>Spring/Java</li>
                    <li>React/Javascript</li>
                    <li>MongoDB</li>
                    <li>Mysql</li>
                </ul>
                ],
    timeline: <ul><li><b>Testing should focus on Business Plan.</b></li></ul>},

    { id: 2, name: "phase-two", title: "UI/UX Development", subTitle: "User Experience Development",
    progress: 0,
    description: ["Using data from phase two, focus on developing a user-friendly, fast, and appealing Progressive Web App."],
    timeline: <ul><li><b>Testing to be focused on User Interface ease of use and appeal.</b></li></ul>},
    { id: 3, name: "phase-three", title: "Pre-deployment", subTitle: "Public Beta Prep",
    progress: 0,
    description: ["Backend Architecture will be moved to a cloud service provider such as AWS."],
    timeline: <ul><li>Public Authentication protocols added, security added.</li>
                <li>Stress and Security Tests performed.</li></ul>}                  
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
                <LinearProgress color="primary" variant="determinate" className={props.theme.accordianSubHeading} value={e.progress}/>
            </AccordionSummary>
            <AccordionDetails>
                <div>
                {e.description.map ( (p,i) => <Typography key={i} style={{marginBottom:"15px"}} inline>{p}</Typography>)}
                </div>
                <Typography>{e.timeline}</Typography>
            </AccordionDetails>
        </Accordian>)}

    </>)

}

export default Project
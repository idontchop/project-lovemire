import logo from './images/lovemire-logo-wide.png';
import styled from 'styled-components'
import {useState} from 'react';
import { LinearProgress, Button, Label, TextField, Card, Typography, CardContent, CardActions, InputAdornment, Link} from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {useSpring, animated} from 'react-spring'
import MockUpsContainer from './containers/MockUpsContainer'
import ContentTester from './accessLevelCustomCards/ContentTester'
import Developer from './accessLevelCustomCards/Developer'
import AllTester from './cards/AllTester'

import { makeStyles } from '@material-ui/core/styles';
import './App.css'

import Project from './components/Project'

const accessLevels = {
  0: "Developer",
  1: "ContentTester"
}



const useStyles = makeStyles({
  card: {
    width: 345,
    height: `100%`,
    margin: `10px auto`
  },
  wideCard: {
    width: "auto",
    maxWidth: 720,
    height: `100%`,
    margin: `10px auto`
  },
  clear: {
    display: 'block',
    clear: 'both'
  },
  accordianHeading: {
    flexBasis: '33.33%',
    flexShrink: 0
  },
  accordianSubHeading: {
    flexBasis: '33.33%',
    fontSize: "0.8em",
    justifyContent: "center"
  }
});

const beginHeader = {
  backgroundColor: "#282c34",
  minHeight: "25vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "white"
}

const afterHeader = {
  minHeight: "10vh",
  justifyContent: "flex-start",
  fontSize: "calc(5px + 2vmin)",
  flexDirection: "row"
}

const h1Style = {
  fontFamily: `'Roboto', sans-serif`,
  margin: `5px 5px 5px 20px`,
  color: `#aeb7bf`
}

const axios = require('axios').default;

const AUTHURL = "https://lovemire.com/auth";

function App() {

  const theme = useStyles();

  const [springStyles, springApi] = useSpring( () => ({opacity: 0}))
  const [headerStyles, headerApi] = useSpring ( () => (beginHeader))
  const [imgStyles, imgApi] = useSpring( () => ({height: "auto"}))
  const [h1Styles, h1Api] = useSpring( () => (h1Style))




  const [accessCode, setAccessCode] = useState("")
  const [token, setToken] = useState("")
  const [user, setUser] = useState({})

  const [TesterContent, setTesterContent] = useState(null)

  const getToken = (e) => {
    if (e) e.preventDefault()

    if(accessCode !== "") {
      axios.get(AUTHURL + `/testuser/${accessCode}`, {responseType: 'json'})
        .then ( response => {
          console.log(response)
          springApi.start({opacity: 1})
          headerApi.start(afterHeader)
          imgApi.start({maxHeight: "5vh"})
          h1Api.start({fontSize: "20px", color: "#dcdee0"})
          if (!!response['data']['user']) {
            setUser(response['data']['user'])
            let n = require('./accessLevelCustomCards/' + accessLevels[response['data']['user']['accessLevel']])
            //let n = require('./accessLevelCustomCards/ContentTester')
            setTesterContent(n)
          }
          if (!!response['data'] && response['data']['token']) {
            setToken(response['data']['token'])
          }
          else setToken("error")

        })
        .catch (e => {
          console.log(e)
          setToken("network-error")
        })

      }       

  }

  console.log(user)
  return (
    <div>
      <animated.header style={headerStyles}>
        <animated.h1 style={h1Styles}>Project: </animated.h1>
        <animated.img style={imgStyles} src={logo} alt="LoveMire" />
      </animated.header>
      <div style={{padding: "20px"}}>
      <Grid container
            spacing={3}
            direction="row"
            justifyContent="center"
            alignItems="flex-start">
        <Grid item>
        <form onSubmit={(e) => getToken(e)}>
        <Card className={theme.card}>
          <CardContent>
          <Typography gutterBottom variant="h5">Test User Gateway</Typography>
          <TextField className="clear" name="access" 
            label="Access Code"
            onChange={ (e) => setAccessCode(e.target.value) }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }} />
          </CardContent>
          <CardActions>
            <Button className="clear" 
              variant="contained" 
              color="primary" 
              onClick={() => getToken() }>Get Link!</Button>
          </CardActions>
          <CardContent>
          {!!token && token === "error" &&
            <Typography>Code not found</Typography>
          }
          </CardContent>
        </Card>
        </form>
        </Grid>

      
      {!!token && token === "network-error" &&
        <div>
          <p style={{color: 'red'}}>Network Error (maybe we are upgrading!)</p>
        </div>
      }
      {!!token && token.length > 20 && 
      <Grid item>
      <animated.div style={springStyles}>
        <Card className={theme.card}>
        <CardContent>
          <Typography gutterBottom variant="h5">Welcome {user.title}!</Typography>
            <Button
            comopnent="Link"
            variant="contained"
            color="primary"
             href={`https://beta.lovemire.com/?t=${token}`}>Beta (for testers)</Button>
          <Typography gutterBottom></Typography>
          { user.accessLevel ===0 &&  <Button
            comopnent="Link"
            variant="contained"
            color="primary"
             href={`http://localhost:3000/?t=${token}`}>Local (for developers)</Button>             }
        </CardContent>
        </Card>
        </animated.div>
      </Grid>}
      {!!user && user.accessLevel >= 0 && <AllTester springStyles={springStyles} theme={theme} user={user} />}
      {!!user && user.accessLevel === 0 && <Developer springStyles={springStyles} theme={theme} user={user} />}
      {!!user && user.accessLevel == 1 && <ContentTester springStyles={springStyles} theme={theme} user={user} />}
      {!!user && user.accessLevel >= 0 && <MockUpsContainer theme={theme} user={user} />}
      {!!token && token.length > 20 && <Grid item>
        <animated.div style={springStyles}>
          <Project theme={theme} />
        </animated.div>
        </Grid>}
      
      </Grid>
      </div>
    </div>
  );
}

export default App;

import logo from './images/lovemire-logo-wide.png';
import styled from 'styled-components'
import {useState} from 'react';
import { Button, Label, TextField, Card, Typography, CardContent, CardActions, InputAdornment, Link} from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { makeStyles } from '@material-ui/core/styles';
import './App.css'

const StyledH1 = styled.h1`
  font-family: 'Roboto', sans-serif;
  margin: 0;
  color: #aeb7bf;
`;

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    height: `100%`,
    margin: `10px auto`
  },
  clear: {
    display: 'block'
  }
});

const axios = require('axios').default;

const AUTHURL = "https://lovemire.com/auth";

function App() {

  const theme = useStyles();
  const [accessCode, setAccessCode] = useState("")
  const [token, setToken] = useState("")
  const [user, setUser] = useState({})

  const getToken = (e) => {
    if (e) e.preventDefault()

    if(accessCode !== "") {
      axios.get(AUTHURL + `/testuser/${accessCode}`, {responseType: 'json'})
        .then ( response => {
          console.log(response)
          if (!!response['data']['user']) setUser(response['data']['user'])
          if (!!response['data'] && response['data']['token'])
            setToken(response['data']['token'])
          else setToken("error")

        })
        .catch (e => {
          console.log(e)
          setToken("network-error")
        })

      }       

  }

  return (
    <div>
      <header className="App-header">
        <StyledH1>Project: </StyledH1>
        <img src={logo} alt="LoveMire" />

      </header>
      <Grid container
            spacing={2}
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
        <Card className={theme.card}>
        <CardContent>
          <Typography gutterBottom variant="h5">Welcome {user.title}!</Typography>
          <Typography gutterBottom>Go to Beta!</Typography>
            <Button
            comopnent="Link"
            variant="contained"
            color="primary"
             to={`https://beta.lovemire.com/?t=${token}`}>Go!</Button>
        </CardContent>
        </Card>
      </Grid>}
      </Grid>
    </div>
  );
}

export default App;

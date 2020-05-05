import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Guide from '../components/Guide';
import Vote from '../components/Vote';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function Cook() {

  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 2,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
  const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

  const classes = useStyles();
  return (
    
    <div >
    
    <ThemeProvider>

      <div>
      <Grid container spacing={3}>
      <Grid item xs>
      <iframe width="900" height="600" src="http://localhost:9999/" frameborder="0" allowfullscreen></iframe>

    </Grid>

    <Grid item xs>
      <Guide/>
    </Grid>
    </Grid>
      
      </div>
      </ThemeProvider>
    </div>
  );
}

export default Cook;

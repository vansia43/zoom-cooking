import logo from './logo.svg';
import React, { Component } from "react";

import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Guide from './components/Guide';
import Vote from './components/Vote';

import Setup from './components/Setup';
import Cook from './components/Cook';
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



class App extends Component{
  
  state = {
    counters: 12
  };
  
 render() {
   
  return (
    
    
  


      <Router>
      <div className="App-header">
         <div>
           <header>
           <p>
             Zoom+Cooking+Friends = Delicious!
           </p>
             <Link to="/">Setup</Link>
             {' '}
             <Link to="/cook">Cook</Link>
             {' '}
           </header>
             </div>
           <main>
             <Switch>
               <Route exact path="/" render={(props) => <Setup {...props} counters={this.state.counters} />}/>
               <Route exact path="/cook" render={(props) => <Cook {...props} counters={21} />}/>
             </Switch>
           </main>
         </div>
       </Router>
  
  );
}
}

export default App;

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

 function Childs() {
   // We can use the `useParams` hook here to access
   // the dynamic pieces of the URL.
   let { id } = useParams();

   return (
     <div>
      <Guide id={id} />
       <h3>ID: {id}</h3>
     </div>
   );
 }

class App extends Component{
  
  state = {
    counters: 12
  };
  
 render() {
   
  return (
    
    <div className="App-header">
    
      <header>
        <p>
          Zoom+Cooking+Friends = Delicious!
        </p>
      </header>
      <Router>
         <div>
           <header>
             <Link to="/room">Vegan</Link>
             {' '}
             <Link to="/">Login</Link>
             {' '}
           </header>
           <main>
             <Switch>
               <Route exact path="/" render={(props) => <Vote {...props} counters={this.state.counters} />}/>
               <Route exact path="/room" render={(props) => <Vote {...props} counters={21} />}/>
             </Switch>
           </main>
         </div>
       </Router>
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
    </div>
  );
}
}

export default App;

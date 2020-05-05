import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Vote from '../components/Vote';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

class Setup extends Component {

render(){
  const {
  counters
 } = this.props;
 
  return (
    <div>
  <Vote/> 
  <br></br>
  <Vote/>
  <br></br>
  <Vote/>
  </div>
  );
}
}

export default Setup;


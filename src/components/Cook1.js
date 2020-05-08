import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

class Cook extends Component {
  constructor(props) {
   super(props);
   this.state = {
      counters: 12,
   };
 }
 
addVote(){
  this.setState({
        counters: this.state.counters +1
      });
};
render(){



  return (
    <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Mac and Cheese Vegan
          </Typography>
          
          <Typography variant="body2" color="textSecondary" component="p">
            Delicious Vegan Mac and cheese with carrort potato and oninon sauce 
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => this.addVote()}>
          Vote
        </Button>
        Count: {this.state.counters}
      </CardActions>
    </Card>
  );
}
}

export default Cook;


import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { search } from './Search';

const handleScroll = ({ currentTarget }, onLoadMore) => {
  if (
    currentTarget.scrollTop + currentTarget.clientHeight >=
    currentTarget.scrollHeight
  ) {
    setTimeout(() => {
      onLoadMore();
    }, 1000);
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 1),
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    display: 'block',
  },
  paper: {
    maxWidth: 800,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export const ChapterList = ({ chapters, onLoadMore }) => {
  const classes = useStyles();

  const [term, setTerm] = useState('');

  const searchHandler = (e) => {
    setTerm(e.target.value); //outputs watever the input is inputted
  };

  return (
    <div className="App">
      <h2>Batman the Animated Series Collection</h2>
      <form>
        Search By Episode Name:
        <input
          className="Input"
          type="text"
          onChange={searchHandler}
          value={term}
        />
      </form>
      <ul
        className="chapter-list"
        onScroll={(e) => handleScroll(e, onLoadMore)}
      >
        {chapters
          .filter(search(term))
          .map(({ id, show, episode, number, rating }) => {
            return (
              <div>
                <Paper
                  direction="column"
                  align-items="center"
                  justify="center"
                  className={classes.paper}
                >
                  <Grid
                    container
                    spacing={0}
                    direction="column"
                    className={classes.root}
                  >
                    <List className={classes.root} key={id}>
                      <ListItem justify="center" className={classes.root}>
                        Show: {show}
                      </ListItem>
                      <ListItem justify="center" className={classes.root}>
                        Episode: {episode}
                      </ListItem>
                      <ListItem justify="center" className={classes.root}>
                        # {number}
                      </ListItem>
                      <ListItem justify="center" className={classes.root}>
                        Rating: {rating}
                      </ListItem>
                    </List>
                  </Grid>
                </Paper>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export const JQList = ({ chapters2, onLoadMore }) => {
  const classes = useStyles();

  const [term, setTerm] = useState('');

  const searchHandler = (e) => {
    setTerm(e.target.value); //outputs watever the input is inputted
  };

  return (
    <div className="App">
      <h2>The New Batman Adventures Collection</h2>
      <form>
        Search By Episode Name:
        <input
          className="Input"
          type="text"
          onChange={searchHandler}
          value={term}
        />
      </form>
      <ul
        className="chapter-list"
        onScroll={(e) => handleScroll(e, onLoadMore)}
      >
        {chapters2
          .filter(search(term))
          .map(({ id, show, episode, number, rating }) => {
            return (
              <div>
                <Paper
                  direction="column"
                  align-items="center"
                  justify="center"
                  className={classes.paper}
                >
                  <Grid
                    container
                    spacing={0}
                    direction="column"
                    className={classes.root}
                    key={id}
                  >
                    <List className={classes.root}>
                      <ListItem justify="center" className={classes.root}>
                        Show: {show}
                      </ListItem>
                      <ListItem justify="center" className={classes.root}>
                        Episode: {episode}
                      </ListItem>
                      <ListItem justify="center" className={classes.root}>
                        # {number}
                      </ListItem>
                      <ListItem justify="center" className={classes.root}>
                        Rating: {rating}
                      </ListItem>
                    </List>
                  </Grid>
                </Paper>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

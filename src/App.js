import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Image from './logo.png'
const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
    
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  links: {
      marginLeft: 'auto'
  },
  heroContent: {
    padding: theme.spacing(15, 0, 6),
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  contentLogo: {
    width: 200,
    height: 200
  },
  cta: {
      marginTop: 40
  }
}));



export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <img src={Image} style={{width: 50, height: 50}}/>
          <Typography style={{marginLeft: 10, fontFamily: "Montserrat", fontWeight: 500}}variant="h6">Calma</Typography>
          <nav className={classes.links}>
            <Link variant="button" color="textPrimary" href="/home" className={classes.link}>
              Home
            </Link>
            <Link variant="button" color="textPrimary" href="/signup" className={classes.link}>
              Sign up
            </Link>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Sign in
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container component="main" className={classes.heroContent}>
        <img src={Image} className={classes.contentLogo}/>
        <Typography style={{fontFamily: "Montserrat", fontWeight: 600, marginTop: 90, textAlign: "center"}} variant="h3">Manage your tasks quickly and easily</Typography>
        <div className={classes.cta}>
        <Button size="large"  style={{marginRight: 10}} variant="contained" color="primary">
            Sign in
        </Button>
        <Button size="large" style={{marginLeft: 10}} href="/signup" variant="outlined" color="primary">Sign up</Button>
        </div>
      </Container>
    
    </React.Fragment>
  );
}
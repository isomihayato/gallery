import { useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  MenuList,
  MenuItem,
  ListItemIcon,
  Paper,
  Grid,
} from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import InfoIcon from '@material-ui/icons/Info'
import Side from 'Atoms/layout/Side'
import Cards from 'Templates/Cards'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    sider: {
      width: 200,
    },
  }),
)

function createMenuContent() {
  return (
    <>
      <MenuList>
        <MenuItem
          style={{ borderBottom: 'solid #d6d6d6 0.4px', paddingBottom: 15 }}
        >
          <ListItemIcon>
            <InfoIcon />
            <Link
              to="/about"
              style={{ color: 'black', textDecoration: 'none' }}
            >
              このサイトについて
            </Link>
          </ListItemIcon>
        </MenuItem>
      </MenuList>
    </>
  )
}

function App() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const menuContent = createMenuContent()
  return (
    <div className="App">
      <Router>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => setOpen(!open)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Gallery
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container>
          <Grid item xs={2} component={Paper}>
            <Side content={menuContent} open={open} />
          </Grid>
          <Grid item xs={10}>
            <Switch>
              <Route path="/">
                <Cards />
              </Route>
              <Route path="/about"></Route>
            </Switch>
          </Grid>
        </Grid>
      </Router>
    </div>
  )
}

export default App

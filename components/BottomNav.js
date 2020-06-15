import Link from 'next/link'

import { AppBar, Toolbar } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import Fab from '@material-ui/core/Fab'
import { makeStyles } from '@material-ui/core/styles'
import { FolderIcon, Home } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles((theme) => ({
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    link: {
        color: 'white',
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto',
    },
}));

export default function BottomNav() {
    const classes = useStyles();
    return (
        <>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>

            <Link href="/"><a className={classes.link}>
                <IconButton edge="start" color="inherit" aria-label="home">
                    <Home />
                </IconButton>
            </a></Link>

            <Link href="/create"><a className={classes.link}>
                <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                    <AddIcon />
                </Fab>
            </a></Link>

            <div className={classes.grow} />

            <IconButton color="inherit">
                <SearchIcon />
            </IconButton>

            <Link href="/settings"><a className={classes.link}>
                <IconButton edge="end" color="inherit">
                    <SettingsIcon />
                </IconButton>
            </a></Link>

        </Toolbar>
        </AppBar>
        </>
    )
}
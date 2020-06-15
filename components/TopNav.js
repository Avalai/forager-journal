import Link from 'next/link'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    appBar: {
      top: 0,
    },
    link: {
        color: 'white',
    },
    grow: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
}));

export default function TopNav(props) {
    const classes = useStyles();
    return (
        <>
        <AppBar color="primary" className={classes.appBar}>
        <Toolbar>

            <Typography variant="h6" className={classes.title}>
                { props.pageName }
            </Typography>

        </Toolbar>
        </AppBar>
        </>
    )
}
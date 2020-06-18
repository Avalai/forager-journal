import BottomNav from '../components/BottomNav'
import TopNav from '../components/TopNav'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core'
import { spacing } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}))

export default function Layout(props) {

  const classes = useStyles()
  
  return (
    <>
      <TopNav pageName={props.pageName} />
      <div className={classes.toolbar} />
      <Container>
        {props.children}
      </Container>
      {/* Bottom Toolbar spacer needs a top margin so the Fab btn doesn't overlap the content */}
      <div className={classes.toolbar} style={{marginTop: '12px'}} />
      <BottomNav />
    </>
  )
}
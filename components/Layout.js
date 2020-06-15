import BottomNav from '../components/BottomNav'
import TopNav from '../components/TopNav'
import { Container } from '@material-ui/core'
import { spacing } from '@material-ui/system';

export default function Layout(props) {
  return (
    <>
      <TopNav pageName={props.pageName} />
      <Container style={{margin: "56px auto"}}>
        {props.children}
      </Container>
      <BottomNav />
    </>
  )
}
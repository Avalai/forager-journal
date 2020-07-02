import BottomNav from '../components/BottomNav'

export default function Layout(props) {
  return (
    <>
      {props.children}
      <BottomNav />
    </>
  )
}
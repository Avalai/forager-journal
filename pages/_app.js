import Head from '../components/Head'
import CssBaseline from '@material-ui/core/CssBaseline'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head />
            <CssBaseline />
            <Component {...pageProps} />
        </>
    )
}
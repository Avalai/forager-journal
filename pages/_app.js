import Head from '../components/Head'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ApolloProvider } from '@apollo/client'
import client from '../graphql/apollo-client.ts'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head />
            <CssBaseline />
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
        </>
    )
}
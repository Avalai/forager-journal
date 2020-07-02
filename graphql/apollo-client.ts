import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.faunaDbGraphQlEndpoint,
    headers: {
      authorization: `Bearer ${process.env.faunaDbSecret}`
    }
  })
})

export default client
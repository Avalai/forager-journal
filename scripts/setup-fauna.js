// This script sets up the database to be used for this example application.
// Look at the code to see what is behind the magic
const faunadb = require('faunadb')
const q = faunadb.query
const request = require('request')
const fs = require('fs')
const streamToPromise = require('stream-to-promise')

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

// In order to set up a database, we need an admin key, so let's ask the user for a key.
readline.question(`Please provide the FaunaDB admin key\n`, (adminKey) => {
  // A graphql schema can be imported in override or merge mode: 'https://docs.fauna.com/fauna/current/api/graphql/endpoints#import'
  const options = {
    model: 'merge',
    uri: 'https://graphql.fauna.com/import',
    headers: { Authorization: `Bearer ${adminKey}` },
  }
  readline.close()
  const stream = fs.createReadStream('./graphql/forager-journal-schema.gql').pipe(request.post(options))
  streamToPromise(stream)
    .then((res) => {
      const readableResult = res.toString()
      if (readableResult.includes('success')) {
        console.log('1. Successfully imported schema')
        return
      }
      throw new Error(readableResult)
    })
    .catch((err) => {
      console.error(err)
      console.error(`Could not import schema, closing`)
    })
    .then(() => {
      // The GraphQL schema is important, this means that we now have a GuestbookEntry Collection and an entries index.
      // Then we create a token that can only read and write to that index and collection
      var client = new faunadb.Client({ secret: adminKey })
      return client
        .query(
          q.CreateRole({
            name: 'ForagerRole',
            privileges: [
              {
                resource: q.Collection('Species'),
                actions: { read: true, write: true, create: true },
              },
              {
                resource: q.Collection('Finding'),
                actions: { read: true, write: true, create: true },
              },
              {
                resource: q.Collection('Harvest'),
                actions: { read: true, write: true, create: true },
              },
              {
                resource: q.Index('findings'),
                actions: { read: true },
              },
              {
                resource: q.Index('species'),
                actions: { read: true },
              },
              {
                resource: q.Index('harvests'),
                actions: { read: true },
              },
            ],
          })
        )
        .then((res) => {
          console.log(
            '2. Successfully created role to read and write guestbook entries'
          )
        })
        .catch((err) => {
          if (err.toString().includes('instance already exists')) {
            console.log('2. Role already exists.')
          } else {
            throw err
          }
        })
    })
    .catch((err) => {
      console.error(err)
      console.error(`Failed to create role, closing`)
    })
    .then((res) => {
      // The GraphQL schema is important, this means that we now have a GuestbookEntry Collection and an entries index.
      // Then we create a token that can only read and write to that index and collection
      var client = new faunadb.Client({ secret: adminKey })
      return client
        .query(
          q.CreateKey({
            role: q.Role('ForagerRole'),
          })
        )
        .then((res) => {
          console.log('3. Created key to use in client')
          console.log(
            'Replace the < GRAPHQL_SECRET > placehold in next.config.js with:'
          )
          console.log(res.secret)
        })
    })
    .catch((err) => {
      console.error(err)
      console.error(`Failed to create key, closing`)
    })
})

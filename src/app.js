// @flow

import 'isomorphic-fetch'
import Koa from 'koa'
import mount from 'koa-mount'
import graphqlHTTP from 'koa-graphql'
import { koaPlayground } from 'graphql-playground-middleware'

import schema from './schema'

const app = new Koa()

app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
})))

app.use(mount('/playground', koaPlayground({
  endpoint: '/graphql',
})))

app.listen(8000, () => {
  console.log('server listening at http://localhost:8000');
  console.log('graphql playground available at http://localhost:8000/playground');
})
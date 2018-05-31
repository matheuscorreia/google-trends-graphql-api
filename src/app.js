// @flow

import 'babel-polyfill'
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

app.listen(process.env.PORT || 8080, () => {
  console.log('Listening at port ${process.env.PORT || 8080}')
})
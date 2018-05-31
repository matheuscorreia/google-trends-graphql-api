// @flow
import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLNonNull } from 'graphql';

import api from '../api'

import InterestOverTimeType from './interestOverTime/InterestOverTimeType';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root field for all queries',
  fields: () => ({
    interestOverTime: {
      type: InterestOverTimeType,
      args: {
        terms: {
          type: new GraphQLNonNull(GraphQLList(GraphQLString))
        },
      },
      resolve: async (obj, args) => api({ keyword: args.terms }),
    }
  })
})

export default QueryType
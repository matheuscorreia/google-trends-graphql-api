// @flow
import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLNonNull } from 'graphql';

import api from '../api'

import InterestOverTimeType from './interestOverTime/InterestOverTimeType';
import commonArgs from './commonArgs';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root field for all queries',
  fields: () => ({
    interestOverTime: {
      type: InterestOverTimeType,
      args: commonArgs,
      resolve: async (_, args) => api(args),
    }
  })
})

export default QueryType
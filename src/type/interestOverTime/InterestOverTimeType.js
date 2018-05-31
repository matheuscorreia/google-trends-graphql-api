//@flow
import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';

import TimelineDataPointType from './TimelineDataPointType'

const InterestOverTimeType = new GraphQLObjectType({
  name: 'InterestOverTime',
  description: 'Show data timeline info for term trends. For multiple terms, also shows average',
  fields: () => ({
    timelineData: {
      type: new GraphQLList(TimelineDataPointType),
      resolve: obj => obj.timelineData,
    }
  })
})

export default InterestOverTimeType
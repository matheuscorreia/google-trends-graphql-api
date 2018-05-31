//@flow
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLBoolean } from 'graphql'

const TimelineDataPointType = new GraphQLObjectType({
  name: 'TimelineDataPoint',
  description: 'Data point on data timeline',
  fields: () => ({
    time: {
      type: GraphQLInt,
      description: 'Time of point represented in seconds',
      resolve: obj => obj.time,
    },
    formattedTime: {
      type: GraphQLString,
      description: 'Formatted time representing range from this data point to the next',
      resolve: obj => obj.formattedTime,
    },
    formattedAxisTime: {
      type: GraphQLString,
      description: 'Formatted time representing date of this data point',
      resolve: obj => obj.formattedAxisTime,
    },
    value: {
      type: new GraphQLList(GraphQLInt),
      description: 'Array of values containing y axis values for each term',
      resolve: obj => obj.value,
    },
    hasData: {
      type: new GraphQLList(GraphQLBoolean),
      description: 'Array of booleans informing if data is projected or exists',
      resolve: obj => obj.hasData,
    },
    formattedValue: {
      type: new GraphQLList(GraphQLString),
      description: 'Array of values mathing `value` field but all formatted',
      resolve: obj => obj.formattedValue,
    },
  })
})

export default TimelineDataPointType
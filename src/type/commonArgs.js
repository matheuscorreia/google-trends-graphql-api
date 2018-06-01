// @flow

import {
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLEnumType,
  GraphQLBoolean,
} from 'graphql'

const PropertyEnum = new GraphQLEnumType({
  name: 'PropertyEnum',
  values: {
    images: {
      value: 'images',
    },
    news: {
      value: 'news',
    },
    youtube: {
      value: 'youtube',
    },
    froogle: {
      value: 'froogle',
    },
  }
})

const ResolutionEnum = new GraphQLEnumType({
  name: 'ResolutionEnum',
  values: {
    COUNTRY: {
      value: 'COUNTRY',
    },
    REGION: {
      value: 'REGION',
    },
    CITY: {
      value: 'CITY',
    },
    DMA: {
      value: 'DMA',
    },
  }
})

export default {
  keyword: {
    type: GraphQLNonNull(GraphQLList(GraphQLString)),
    description: 'Search term or terms if you wish to compare',
  },
  startTime: {
    type: GraphQLString,
    description: 'Start of time to retrieve data from. If not provided, defaults to 2004, January 1.',
  },
  endTime: {
    type: GraphQLString,
    description: 'Date limit to retrieve data. If not provided, defaults to current time.',
  },
  geo: {
    type: GraphQLString,
    description: 'Location of interest',
  },
  hostLocation: {
    type: GraphQLString,
    description: 'Preferred language. Defaults to english',
  },
  timezone: {
    type: GraphQLInt,
    description: 'Time zone difference, in minutes, from UTC to current locale',
  },
  category: {
    type: GraphQLInt,
    // @TODO: implement enum with categories leading to values
    description: 'Category to search with. Defaults to all. https://github.com/pat310/google-trends-api/wiki/Google-Trends-Categories',
  },
  property: {
    type: PropertyEnum,
    description: 'Google property to filter on. Defaults to web search',
  },
  granularTimeResolution: {
    type: GraphQLBoolean,
    description: 'Boolean that dictates if the results should be given in a finer time resolution (if startTime and endTime is less than one day, this should be set to true)',
  },
}

export const interestOverRegionArgs = {
  resolution: {
    type: ResolutionEnum,
    description: 'Granularity of the geo search',
  },
}
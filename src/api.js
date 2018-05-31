// @flow

import googleTrends from 'google-trends-api'
import { ENGINE_METHOD_DSA } from 'constants';

export const METHODS = {
  AUTO_COMPLETE: 'AUTO_COMPLETE',
  INTEREST_OVER_TIME: 'INTEREST_OVER_TIME', 
  INTEREST_BY_REGION: 'INTEREST_BY_REGION',
  RELATED_QUERIES: 'RELATED_QUERIES',
  RELATED_TOPICS: 'RELATED_TOPICS', 
}

type Method = $Values<typeof Methods>

type Args = {
  keyword: string | string[],
  startTime?: Date,
  endTime?: Date,
  geo?: string,
  hostLocation?: string,
  timezone?: number,
  category?: number,
  property?: 'images' | 'news' | 'youtube' | 'froogle',
  resolution?: 'COUNTRY' | 'REGION' | 'CITY' | 'DMA',
  granularTimeResolution?: boolean, 
}

export default async (args: Args, method: Methods = METHODS.INTEREST_OVER_TIME) => {
  const {
    AUTO_COMPLETE,
    INTEREST_BY_REGION,
    INTEREST_OVER_TIME,
    RELATED_QUERIES,
    RELATED_TOPICS,
  } = METHODS

  const {
    autoComplete,
    interestOverTime,
    interestByRegion,
    relatedQueries,
    relatedTopics,
  } = googleTrends;

  const apiMethods = {
    [AUTO_COMPLETE]: autoComplete,
    [INTEREST_OVER_TIME]: interestOverTime,
    [INTEREST_BY_REGION]: interestByRegion,
    [RELATED_QUERIES]: relatedQueries,
    [RELATED_TOPICS]: relatedTopics,
  }

  const result = await apiMethods[method]({
    keyword: args.keyword,
  })

  const resultParsed = JSON.parse(result);

  return resultParsed.default;
}
import ApolloClient, { gql } from 'apollo-boost';

import { Project } from '../models/Project';

const client = new ApolloClient({
  uri: 'http://localhost:4000/api',
});

const fetchFn = async (key: string, query: string): Promise<Project[]> => {
  try {
    const data = await client.query({
      query: gql`${query}`,
    });
    if (data.errors) {
      return Promise.reject(new Error('Error Fetching Data.'));
    }
    return Promise.resolve(data.data[key]);
  } catch (err) {
    return Promise.reject(new Error('Server Error Please Try Again.'));
  }
};

export default fetchFn;

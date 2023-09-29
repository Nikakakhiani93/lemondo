import Axios from 'axios';

export const httpMockDataClient = Axios.create({
  baseURL: '/mock-data',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

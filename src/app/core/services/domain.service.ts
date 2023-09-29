import { Domain } from '../types/domain.types';
import { httpMockClient } from './http-client';

export async function fetchDomain(): Promise<Domain[]> {
  const response = await httpMockClient.get('/mockData.json');
  console.log(response);
  return response.data;
}

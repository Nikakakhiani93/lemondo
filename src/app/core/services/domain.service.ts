import { Domain } from '../types/domain.types';
import { httpMockClient } from './http-client';

export async function fetchDomain(): Promise<Domain[]> {
  const response = await httpMockClient.get('/mockData.json');
  return response.data;
}

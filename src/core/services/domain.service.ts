import { Domain } from '../types/domain.types';
import { httpMockDataClient } from './http-client';

export async function fetchDomain(): Promise<Domain[]> {
  const response = await httpMockDataClient.get<Domain[]>('/mock-data.json');
  console.log(response);

  return response.data;
}

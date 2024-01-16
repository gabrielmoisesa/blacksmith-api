import { HttpStatus } from '../types/HttpStatus';

export default function httpMap(status: HttpStatus): number {
  const statusHTTPMap: Record<HttpStatus, number> = {
    OK: 200,
    CREATED: 201,
  };

  return statusHTTPMap[status] ?? 500;
}
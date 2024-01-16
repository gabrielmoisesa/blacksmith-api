export default function httpMap(status: string): number {
  const statusHTTPMap: Record<string, number> = {
    OK: 200,
    CREATED: 201,
  };

  return statusHTTPMap[status] ?? 500;
}
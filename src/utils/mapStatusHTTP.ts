export default function mapStatusHTTP(type: string): number {
  const statusHTTPMap: Record<string, number> = {
    SUCCESSFUL: 200,
    CREATED: 201,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INVALID_VALUE: 400,
    DELETED: 204,
    UNAUTHORIZED: 401,
  };

  return statusHTTPMap[type];
}

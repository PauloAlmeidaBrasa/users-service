export interface HttpResponse {
  statusCode: number
  body: any
}
export interface HttpRequest {
  body?: {
    offset?: number
    limit?: number
  }
}
export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
})

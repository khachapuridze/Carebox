export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'

}
export interface Config {
  method: Method
  headers: any
  body?: string
}

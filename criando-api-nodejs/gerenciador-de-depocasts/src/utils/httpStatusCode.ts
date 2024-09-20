export enum HttpStatusCode {
  // Informações
  Continue = 100,
  SwitchingProtocols = 101,

  // Sucesso
  OK = 200,
  Created = 201,
  Accepted = 202,
  NoContent = 204,
  PartialContent = 206,

  // Redirecionamento
  MovedPermanently = 301,
  Found = 302,
  NotModified = 304,
  TemporaryRedirect = 307,

  // Cliente Erro
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,

  // Servidor Erro
  InternalServerError = 500,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504
}

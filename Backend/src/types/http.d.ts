declare namespace Http {

  // Metodos Http
  export const enum Method {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
  }

  // Codigos de retorno de Http
  export const  enum StatusCode {
      OK = 200,
      BAD_REQUEST = 400,
      FORBIDDEN = 403,
      NOT_FOUND = 404,
      INTERNAL_ERROR = 500
  }
}
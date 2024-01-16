type SuccessStatus = 'OK' | 'CREATED';

type ErrorStatus = 'BAD_REQUEST' | 'NOT_FOUND';

type HttpStatus = SuccessStatus | ErrorStatus;

export {
  SuccessStatus,
  ErrorStatus,
  HttpStatus,
};
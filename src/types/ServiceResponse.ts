import { HttpErrorStatus, HttpStatus } from './HttpStatus';

export type ServiceResponseError = {
  status: HttpErrorStatus,
  data: { message: string }
};

export type ServiceResponseSuccess<T> = {
  status: HttpStatus,
  data: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;
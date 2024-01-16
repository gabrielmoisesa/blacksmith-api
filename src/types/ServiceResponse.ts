import { ErrorStatus, SuccessStatus } from './HttpStatus';

export type ServiceResponseError = {
  status: ErrorStatus,
  data: { message: string }
};

export type ServiceResponseSuccess<T> = {
  status: SuccessStatus,
  data: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;
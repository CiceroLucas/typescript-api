import { HtppStatusCode, HttpResponse } from "./protocols";

export const ok = <T>(body: any): HttpResponse<T> => ({
  statusCode: HtppStatusCode.OK,
  body,
});

export const created = <T>(body: any): HttpResponse<T> => ({
  statusCode: HtppStatusCode.CREATED,
  body,
});

export const badRequest = (message: string): HttpResponse<string> => {
  return {
    statusCode: HtppStatusCode.BAD_REQUEST,
    body: message,
  };
};

export const serverError = (): HttpResponse<string> => {
  return {
    statusCode: HtppStatusCode.SERVER_ERROR,
    body: "Something went wrong.",
  };
};

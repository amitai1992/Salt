export type Params = {
  name: string;
  pii: boolean;
  masked: boolean;
  type: string;
};

export type RequestData = {
  urlParams: Params[];
  queryParams: Params[];
  headers: Params[];
  body: Params[];
};

export type ResponseData = {
  headers: Params[];
  body: Params[];
};

export type JsonFullData = {
  api: string;
  method: string;
  path: string;
  request: RequestData;
  response: ResponseData;
};

export type Params = {
  name: string;
  pii: boolean;
  masked: boolean;
  type: string;
};

export type ApiData = {
  urlParams?: Params[];
  queryParams?: Params[];
  headers: Params[];
  body: Params[];
};

export type JsonFullData = {
  api: string;
  method: string;
  path: string;
  request: ApiData
  response: ApiData;
};

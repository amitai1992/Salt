export type Params = {
  name: string;
  pii: boolean;
  masked: boolean;
  type: string;
};

export type ApiData = {
  urlParams?: Params[];
  queryParams?: Params[];
  headers?: Params[];
  body?: Params[];
};

export type ApiDataCategories = {[K in keyof ApiData]: string}

export type JsonFullData = {
  api: string;
  method: string;
  path: string;
  request: ApiData
  response: ApiData;
};

export type FormData = {
  search: string;
  showField: boolean;
}

export type BooleanCell = "pii" | "masked";
import { ApiData, FormData } from "../models";

export function filter(rowsData: ApiData, formData: FormData) {
  let category: keyof ApiData;
  for (category in rowsData) {
    rowsData[category] = rowsData[category]?.filter((param) => {
      if (
        param.name.includes(formData.search) ||
        param.type.includes(formData.search)
      ) {
        if (formData.showField) {
          return param.pii;
        }
        return true;
      }
      return false;
    });
  }
  return rowsData;
}

export function updateExistingRows(prevRows: ApiData, rowsData:ApiData) {
  return (Object.keys(prevRows) as Array<keyof ApiData>).reduce((updatedRows, category) => {
    updatedRows[category] = prevRows[category]?.map((param) => {
      const updatedParam = rowsData[category]?.find(
        (p) => p.name === param.name
      );
      return updatedParam ? { ...param, ...updatedParam } : param;
    });
    return updatedRows;
  }, { ...prevRows });
}

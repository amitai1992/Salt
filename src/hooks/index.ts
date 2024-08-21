import { useEffect, useState } from "react";
import { ApiData, JsonFullData } from "../models";
import data from "../assets/fe_data.json";
import { updateExistingRows } from "../utils/filters";

export const useMainHook = () => {
  const [apiData, setApidata] = useState<JsonFullData>({ ...data });
  const [activeSection, setActiveSection] = useState<0 | 1>(0);
  const [rows, setRows] = useState<ApiData>({ ...data.request });
  useEffect(() => {
    setRows(
      activeSection === 0 ? { ...apiData.request } : { ...apiData.response }
    );
  }, [activeSection]);

  useEffect(() => {
    const updateRowsFromApiData = () => {
      const rowsData =
        activeSection === 0 ? { ...apiData.request } : { ...apiData.response };
      setRows((prevRows) => {
        return updateExistingRows(prevRows, rowsData);
      });
    };

    updateRowsFromApiData();
  }, [activeSection, apiData]);

  return {
    apiData,
    setApidata,
    activeSection,
    setActiveSection,
    rows,
    setRows,
  };
};

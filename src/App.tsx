import { useCallback, useEffect, useState } from "react";
import classes from "./App.module.scss";
import data from "./assets/fe_data.json";
import { Filter, Header, Navbar, Table } from "./components";
import { ApiData, BooleanCell, JsonFullData } from "./models";
import { FormData } from "./models";
import { filter } from "./utils/filters";

function App() {
  const [apiData, setApidata] = useState<JsonFullData>({ ...data });
  const [activeSection, setActiveSection] = useState<0 | 1>(0);
  const [rows, setRows] = useState<ApiData>({ ...data.request });
  useEffect(() => {
    setRows(
      activeSection === 0 ? { ...apiData.request } : { ...apiData.response }
    );
  }, [activeSection]);

  const handleChangeTable = (newActiveSection: 0 | 1) => {
    setActiveSection(newActiveSection);
  };

  const handleTableCellClick = useCallback(
    (category: keyof ApiData, cell: BooleanCell , name: string) => {
      const newData =
        activeSection === 0 ? { ...apiData.request } : { ...apiData.response };
      const index = newData[category]?.findIndex(
        (param) => param.name === name
      );
      if (index !== -1 && index !== undefined && newData[category]?.[index]) {
        newData[category][index][cell] = !newData[category][index][cell];
        setApidata((prev) => ({
          ...prev,
          [activeSection === 0 ? "request" : "response"]: newData,
        }));
      }
    },
    [activeSection, apiData]
  );
  const applyFilter = (filters: FormData) => {
    const rowsData =
      activeSection === 0 ? { ...apiData.request } : { ...apiData.response };
    setRows(filter(rowsData, filters));
  };

  return (
    <>
      <Header
        api={apiData.api}
        method={apiData.method}
        path={apiData.path}
        className={classes.header__position}
      />
      <Navbar
        callback={handleChangeTable}
        className={classes.navbar__position}
        activeIndex={activeSection}
      />
      <div className={classes.table__filter__container}>
        <div>
          <Filter
            onApply={applyFilter}
          />
        </div>
        <div className={classes.table__wrapper}>
          <Table onTableCellClick={handleTableCellClick} rows={rows} />
        </div>
      </div>
    </>
  );
}

export default App;

import { useMemo, useState } from 'react';
import classes from './App.module.scss';
import data from './assets/fe_data.json';
import { Filter, Header, Navbar, Table } from './components';
import { ApiData, JsonFullData } from './models';
import { FormData } from './models';

function App() {
  const [apiData, setApidata] = useState<JsonFullData>(data)
  const [activeSection, setActiveSection] = useState<0 | 1>(0)
  const [formData, setFormData] = useState<FormData>({ search: "", showField: false })
  const handleChangeTable = (newActiveSection: 0 | 1) => {
    setActiveSection(newActiveSection)
  }
  const handleTableCellClick = (newRows: ApiData) => {
    if (activeSection === 0) {
      setApidata({ ...apiData, request: newRows })
    }
    else {
      setApidata({ ...apiData, response: newRows })
    }
  }
  const applyFilter = (newFormData: FormData) => {
    setFormData({ ...newFormData })
  }

  const rows: ApiData = useMemo(() => {
    const rowsData = activeSection === 0 ? { ...apiData.request } : { ...apiData.response };
    let category: keyof ApiData
    for (category in rowsData) {
      rowsData[category] = rowsData[category]?.filter((param) => {
        if (param.name.includes(formData.search) || param.type.includes(formData.search)) {
          if (formData.showField) { return param.pii }
          return true
        }
        return false
      })
    }
    return rowsData
  }, [activeSection, apiData, formData])

  return (
    <>
      <Header api={apiData.api} method={apiData.method} path={apiData.path} className={classes.header__position} />
      <Navbar callback={handleChangeTable} className={classes.navbar__position} activeIndex={activeSection} />
      <div className={classes.table__filter__container}>
        <div>
          <Filter onApply={applyFilter} onReset={() => setFormData({ search: "", showField: false })} />
        </div>
        <div className={classes.table__wrapper}>
          <Table onTableCellClick={handleTableCellClick} rows={rows} />
        </div>
      </div>

    </>
  );
}

export default App;

import { useState } from 'react';
import classes from './App.module.scss';
import data from './assets/fe_data.json';
import { Header, Navbar, Table } from './components';
import { ApiData, JsonFullData, Params } from './models';


function App() {
  const [apiData, setApidata] = useState<JsonFullData>(data)
  const [activeSection, setActiveSection] = useState<0 | 1>(0)
  const handleChangeTable = (newActiveSection: 0 | 1) => {
    setActiveSection(newActiveSection)
  }
  const handleTableCellClick = (newRows:ApiData) => {
    if(activeSection === 0){
      setApidata({...apiData, request:newRows})
    }
    else{
      setApidata({...apiData,response:newRows})
    }
   
  }
  return (
    <>
      <Header api={apiData.api} method={apiData.method} path={apiData.path} className={classes.header__position} />
      <Navbar callback={handleChangeTable} className={classes.navbar__position} activeIndex={activeSection} />
      <div className={classes.table__wrapper}>
        <Table onTableCellClick={handleTableCellClick} rows={activeSection === 0 ? apiData.request : apiData.response} />
      </div>
    </>
  );
}

export default App;

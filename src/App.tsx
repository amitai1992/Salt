import classes from './App.module.scss';
import data from './assets/fe_data.json';
import { Header, Navbar } from './components';


function App() {
  console.log(data);
  
  return (
    <>
     <Header api={data.api} method={data.method} path={data.path} className={classes.header__position} />
     <Navbar className={classes.navbar__position}/>
    </>
  );
}

export default App;

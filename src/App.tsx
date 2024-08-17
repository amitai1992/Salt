import classes from './App.module.scss';
import data from './assets/fe_data.json'
function App() {
  console.log(data);
  
  return (
    <>
      <h1 className={classes.test}>Salt</h1>
    </>
  );
}

export default App;

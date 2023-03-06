import './App.css';
import Header from './Components/Header';
import useFetch from './Components/useFetch';

function App() {
  const [data] = useFetch(`https://hub.dummyapis.com/employee?noofRecords=$10&idStarts=1001`)
  return (
    <div className="App">
      <Header />
      {
        data.map((elem , index)=>{
          return(
          <h1 key={index}>Name:{elem.firstName}</h1>
          )
        })
      }
    </div>
  );
}

export default App;

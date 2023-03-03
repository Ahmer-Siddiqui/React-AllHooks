import './Home.css'
import React , {useState,useEffect} from 'react';

const Home = () => {
    const [state,setState] = useState(2);
    const [data,setData] = useState([]);
    useEffect(()=>{
        async function getData(){
            const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);

            const res = await get.json();

            setData(res)
            console.log(res);
        }
        getData()
        document.title = `(${state}) Employees Online`
    },[state])
  return (
    <div>
       <button onClick={()=> setState(state+2)}>Click Me {state}</button>
        {
            data.map((element,index)=>{
                return(
                    <div className='data' key={index}>
                       <h4>First Name: {element.firstName}</h4>
                       <h4>Last Name: {element.lastName}</h4>
                       <h4>Email: {element.email}</h4>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Home

import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
export const List =()=>{
    const [data, setData] = useState([]);

    const getData = ()=>{
        axios.get("https://citycountrymasai.herokuapp.com/add-city").then(({ data }) => {
      setData(data.city);
    })
    // console.log(data);

    }
    useEffect(()=>{
      getData();
      // handleChange();
      // handleRemove(); 
    },[])

    
    const handleRemove = (el,index)=>{
      let newdata = [...data]
      newdata.splice(index,1);
      setData(newdata);
      // console.log(newdata);
    }

    const handleChange =(a)=>{
      let newarr = [...data];
      if(a ==="x"){
        // console.log("true")
        newarr.sort((a,b) => a.population-b.population);
        setData(newarr);
      }
      else if(a ==="y"){
        newarr.sort((a,b) => b.population-a.population);
        setData(newarr);
      }else if(a==="n"){
        setData(newarr);
      }
    }


 return (
    <>
    <h3>Population of Various Cities</h3>
    <div>
      <Link to="/country">
      <button>Add Country</button>
      </Link>
      <Link to="/city">
      <button>Add City</button>
      </Link>
      
    </div>
    <div>
      <select onChange={(e)=>{handleChange(e.target.value)}}>
        <option value="n">Population</option>
        <option value="x">Ascending</option>
        <option value="y">Descending</option>
      </select>
    </div>
    <table className="table">
      <thead>
        <tr>
          <th>City</th>
          <th>Country</th>
          <th>Population</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
          {
              data.map((el,index)=>(
                  <tr key={el._id}>
                      <td>{el.city_name}</td>
                      <td>{el.country}</td>
                      <td>{el.population}</td>
                      <td><button>edit</button></td>
                      <td><button onClick={() => handleRemove(el,index)}>Delete</button></td>
                  </tr>
              ))
          }
      </tbody>
    </table>
    </>
    
  
    )
}
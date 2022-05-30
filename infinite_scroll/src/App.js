import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
  
    let scroll_var = Math.round(scrollHeight - scrollTop);
 
    if(scroll_var === clientHeight){
      
      setLoading(true)
      
    }
  }

  const getData = () => {
    
    axios.get("http://localhost:8000/users").then(
      res => setData(prev => [...prev, ...res.data])
    )

    setLoading(false)
  }

  useEffect(() => {
      getData()
  }, [loading])



  return (
    <div className="App" onScroll={handleScroll}>
      <ul >
        {
          data.map((el, id) => {
            return(
              <li key={id} >{ el.name }</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
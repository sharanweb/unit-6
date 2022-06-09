import { useEffect, useState } from "react"
import axios from "axios"

export const ShowData = () =>{
    const [data, setData] = useState([]);
    const getData = ()=>{
        axios.get("http://localhost:5001/job").then(({ data }) => {
      setData(data.res);
    })
    console.log(data.res);

    }
    useEffect(()=>{
      getData();
    },[])

    return (
        <>
        <div>
            {
                data.map((el)=>{
                    return (
                        <li>{el}</li>
                    )
                })
            }
        </div>
        </>
    )


}
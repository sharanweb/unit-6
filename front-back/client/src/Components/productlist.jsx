
import { useEffect, useState } from "react";
import axios from "axios";
import "./productlist.css"
export const List = () =>{
    const [data, setData] = useState([]);

    const getData = ()=>{
        axios.get("https://frontback1.herokuapp.com/products").then(({ data }) => {
      setData(data.product);
    })
    console.log(data);

    }
    useEffect(()=>{
      getData();
      // handleChange();
      // handleRemove(); 
    },[])


    return (
        <div className="mainbox">
        {
            data.map((el)=>(
                <div className="product__card" key={el._id}>
                    <div className="imgDiv">
                        <img src={el.img_url} alt="" className="img" />
                    </div>
                    <div className="main_info">
                        <h3 className="product__brand">{el.brand}</h3>
                        <h4 className="product__title">{el.price}</h4>
                    </div>
                </div>
            ))
        }
        </div>
    )

}
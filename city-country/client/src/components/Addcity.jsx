import axios from "axios";
import { useEffect, useState } from "react";
export const AddCity= ()=>{
    const [data, setdata] = useState([]);

    return (
        <>
        <form>
            <input placeholder="add city"></input>
            <input placeholder="add country"></input>
            <input placeholder="add population"></input>
            <input type="submit" placeholder="Submit"></input>
        </form>
        </>
    )

}
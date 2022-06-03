import axios from "axios";
import { useEffect, useState } from "react";
export const AddCountry= ()=>{
    const [data, setdata] = useState([]);

    return (
        <>
        <form>
            <input placeholder="add country"></input>
            <input type="submit" placeholder="Submit"></input>
        </form>
        </>
    )

}
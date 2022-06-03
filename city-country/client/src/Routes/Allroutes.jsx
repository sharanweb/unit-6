import { Route, Routes } from 'react-router-dom';
import { AddCountry } from '../components/Addcountry';
import { AddCity } from '../components/Addcity';
import {List} from "../components/CityList"
export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<List/>}></Route>
                <Route path="/city" element={<AddCity/>}></Route>
                <Route path="/country" element={<AddCountry/>}></Route>
            </Routes>

        </>
    )
}
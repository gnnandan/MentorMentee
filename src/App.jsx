import axios from 'axios';
import './App.css'
import Navbar from './components/Navbar';
import {useDispatch, useSelector} from 'react-redux';
import { addData } from "./features/getSlice";
import Data from "./pages/Data";
import { useEffect } from "react";

function App() {
 const dispatch = useDispatch();
 const apiData = useSelector((state) => state.post);
  async function getApi(){
    const res = await  axios.get('https://dummyjson.com/products');
    const data =  await res.data.products;
    dispatch(addData(data))
  }
 
useEffect(() => {
getApi();
},[])
  return (
    <div className="App">
        <Navbar />
        <Data apiData = {apiData} />
  </div>
  )
}

export default App

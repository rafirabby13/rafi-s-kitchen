import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";
import { useEffect, useState } from "react";

const Home = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
        .then(res=> res.json())
        .then(data=>{
            // console.log(data.meals);
            setCategories(data.meals)
        })
    },[])
  
  return (
    <div>
      <Header categories={categories}/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
        <Sidebar categories={categories}/>

        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

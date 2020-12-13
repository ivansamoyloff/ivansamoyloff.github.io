import React from "react";
import {useSelector} from "react-redux";
import City from "../City";

 const CitiesList = () => {
     const cities = useSelector(state=>state.cities);
     const items = cities.map((item)=>{
         return <City
             data={item.main}
             mainInfo={item}
             key={item.id}
         />;
     });
     return(
         <div className="album py-5 bg-light">
             <div className="container">
                 <div className="row">
                     {items}
                 </div>
             </div>
         </div>
     )
};

export default CitiesList;
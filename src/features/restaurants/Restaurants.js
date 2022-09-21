import React from "react";
import { useSelector } from "react-redux";
import Restaurant from "./Restaurant"

function Restaurants() {
  const rests = useSelector(state => state.restaurants)
  return (
    <div>
    {/* {
      rests.map(rest=><Restaurant restaurant={rest}/>)
    } */}
    </div>
  );
}

export default Restaurants;

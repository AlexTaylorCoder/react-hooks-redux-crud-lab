import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { restaurantAdded } from "./restaurantsSlice";
import {v4 as uuid} from "uuid"

function RestaurantInput() {
  const dispatch = useDispatch()
  const [name,setName] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(restaurantAdded({name,id:uuid()}))
  }
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e)=>setName(e.target.value)} value={name} type='text' placeholder="name"/>
      <input type="submit" value="Add Restaurant"/>
    </form>
  );
}

export default RestaurantInput;

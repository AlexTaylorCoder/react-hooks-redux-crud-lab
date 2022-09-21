import { createSlice } from "@reduxjs/toolkit";

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    entities: []
  },
  reducers: {
    restaurantAdded(state,action) {
      state.entities.push(action.payload)
    },
    restaurantRemoved(state,action) {
      const entity = state.entities.indexOf(action.payload)
      state.entities.slice(entity, 1)
    }
  },
});

export const { restaurantAdded, restaurantRemoved } = restaurantsSlice.actions
export default restaurantsSlice.reducer;

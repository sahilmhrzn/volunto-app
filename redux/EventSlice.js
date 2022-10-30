import { createSlice } from "@reduxjs/toolkit";
const initialState = {};

const EventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    addEvent(state, { payload }) {
      const { data} = payload;
        return state
    },
    updateEvent(state, { payload }) {
      const { title} = payload;
      return {...state, items: state.items.map((item)=>item.title==title?{...item, quantity:item.quantity-1}:item)}
    },
    removeEvent: (state, {payload}) => {
      const {title} = payload;
      return {...state, items:state.items.filter((item)=>item.title !=title)}
    },
  },
});

export const { addEvent, updateEvent, removeEvent} = EventSlice.actions;
const EventReducer = EventSlice.reducer;
export default EventReducer;
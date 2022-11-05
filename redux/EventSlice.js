import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const EventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    addEvent(state, { payload }) {
        // console.log(payload)
        const { data} = payload;
        state.push(payload)
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
    fetchEvent(state, {payload}){
      state= payload
      return state
    },
    joinEvent(state, {payload}){
      const {uId, eId}=payload
      console.warn(uId, eId)
      state.forEach(e=>{
        e.eventId ==eId?e.volunteerId.push(uId):e
      })
      
      return state
    }
  },
});

export const { addEvent, updateEvent, removeEvent, fetchEvent,joinEvent} = EventSlice.actions;
const EventReducer = EventSlice.reducer;
export default EventReducer;
import { createSlice } from "@reduxjs/toolkit";




const carDataSlice=createSlice({
    name:'car',
    initialState:{
        data:[],
        searchcarData:[]
    },
    reducers:{
        saveCarData:(state,action)=>{
            state.data=action.payload
        },
        searchData:(state,action)=>{

            state.searchcarData =state.data.filter((item) => {
    return item.title.toLowerCase().includes(action.payload.toLowerCase())
  })
//   console.log(searchResult)
        }
    }
})

export  const {saveCarData,searchData}=carDataSlice.actions
export default carDataSlice.reducer



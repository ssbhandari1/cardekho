import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Pagination from './pages/Pagination'
import SearchCar from './pages/SearchCar'
import CarPage from './pages/CarPage'
import { useDispatch } from 'react-redux'
import data from '../data.json'
import { saveCarData } from './redux/carDataSlice'

const App = () => {
 const dispatch=useDispatch()

  useEffect(()=>{
 dispatch(saveCarData(data))
  },[])

  return (
 <BrowserRouter>
 <SearchCar/>
 <Routes>
  <Route path='/page/:id' element={<CarPage/>}/>
 </Routes>
 <Pagination/>
 </BrowserRouter>
  )
}

export default App
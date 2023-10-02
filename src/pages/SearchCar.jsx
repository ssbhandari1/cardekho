import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase, Paper } from '@mui/material'
import './style.scss'
import { useDispatch } from 'react-redux';
import { saveCarData, searchData } from '../redux/carDataSlice';


const SearchCar = () => {
  const dispatch=useDispatch()
    const [search,setSearch]=useState('')

    
    const handleCarSearch=()=>{
      
      dispatch(searchData(search))
    }
   
  return (
    <div className="searchSec">
    <Paper
        component="form"
        className='searchInput'
      >

        <InputBase
          sx={{ ml: 1, flex: 1,color:'black',fontWeight:'500' }}
          placeholder="Search..."
          inputProps={{ 'aria-label': 'search google maps' }}
          value={search}
         size='small'
          onChange={(e)=>setSearch(e.target.value)}
        />
        <IconButton type="button" sx={{ color:'black' }} aria-label="search" onClick={handleCarSearch}>
          <SearchIcon />
        </IconButton>

      </Paper>
    </div>
  )
}

export default SearchCar
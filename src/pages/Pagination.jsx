import React, { useEffect, useState } from 'react'
import { BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill} from "react-icons/bs";
import data from '../../data.json'
import './style.scss'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Pagination = () => {
  const[page,setPage]=useState(1)


  const carData=useSelector((state)=>state.carData.data)
   const searchCarData=useSelector((state)=>state.carData.searchcarData)

   
  const navigate=useNavigate()

    const handleselectPageNo=(selectPage)=>{
      if (
        selectPage >= 1 &&
        selectPage <= carData?.length / 6 &&
        selectPage !== page
      ){
        setPage(selectPage)
        navigate(`/page/${selectPage}`)
      }
    
      }

     

  
  useEffect(()=>{
    navigate(`/page/${page}`)
  },[]) 
  return (
<div className="pagination">
  <div className="pageNum"></div>

  <div className="pageChange">
    <BsFillArrowLeftCircleFill style={{fontSize:'1.5rem',cursor:'pointer'}} onClick={()=>handleselectPageNo(page-1)}/>
{
  carData?.length > 0 &&
  [...Array(carData?.length/6)].map((it,index)=>{
    return(
      <span key={index}  className={`${page===index + 1 && 'selectPage'}`} onClick={()=>handleselectPageNo(index+1)}> 
        {index+1}
      </span>
    )
  })
}
<BsFillArrowRightCircleFill style={{fontSize:'1.5rem',cursor:'pointer'}} onClick={()=>handleselectPageNo(page + 1)}/>
</div>
</div>
  )
}

export default Pagination
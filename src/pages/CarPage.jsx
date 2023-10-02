import React from 'react'
import data from '../../data.json'
import { Button } from '@mui/material'
import './style.scss'
import { BsFillPeopleFill ,BsSpeedometer} from "react-icons/bs";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';



const CarPage = () => {

   const carData=useSelector((state)=>state.carData.data)
   const searchCarData=useSelector((state)=>state.carData.searchcarData)

   console.log(searchCarData)
   const {id}=useParams()

const mapCarData=searchCarData.length > 0 ? searchCarData : carData 

  return (
<div className="homePage">
<div className="carPage">

{
    mapCarData?.slice(id * 6 - 6 ,id * 6).map((car,index)=>{
        return(
            <div key={index} className="card">
<img src={car.imgUrl} alt="" />
             <div className="titlesec">
                <p>{car.title}</p>
                <p>{car.year}</p>
             </div>
             <div className="description">
                <p><BsFillPeopleFill style={{color:'blue',marginRight:'2px'}}/> 4 people</p>
                <p><BsSpeedometer   style={{color:'blue',marginRight:'2px'}}/>   Hybrid</p>
                <p><BsSpeedometer   style={{color:'blue',marginRight:'2px'}}/>  6.1km/1-liter</p>
                <p><BsSpeedometer  style={{color:'blue',marginRight:'2px'}}/>  Automatic</p>
             </div>
            
             <div className="priceSec">
                <p>${car.price} <span style={{fontSize:'.8rem'}}>/month</span></p>
                <Button variant='contained' size='small'>Rent now</Button>
             </div>
              </div>
        )
    })
}


 
   
   </div>
</div>
  )
}

export default CarPage
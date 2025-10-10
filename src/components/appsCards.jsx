import { Download } from 'lucide-react'
import React from 'react'
import ratingPng from "../assets/icon-ratings.png"
import { NavLink } from 'react-router'
const HomeCards = ({app}) => {

    const {image, title, downloads, ratingAvg, id} = app
  return (
    <NavLink to = {`/appDetails/${id}`} className='cursor-pointer h-full p-2 card bg-base-100 shadow-lg lg:hover:scale-105 transition ease-in-out'>
        <img className='rounded-xl w-full h-8/12 object-cover' src={image} alt=""/>   
        <h1 className='my-5 text-xl font-medium overflow-hidden'>{title}</h1> 
        <div className='flex justify-between'>
            <p className='text-green-400 flex items-center gap-1 p-1 rounded-md bg-green-100'><Download className='w-4'></Download>  {downloads}M</p>

            
            <aside className='text-orange-400 flex items-center gap-1 p-1 rounded-md bg-amber-100'><img className='w-4' src={ratingPng} alt=""/>{ratingAvg}</aside>
        </div>
    </NavLink>
  )
}

export default HomeCards 
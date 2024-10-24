import React from 'react'
import { Link } from 'react-router-dom'

function Card({urlToImage,title,description,index,setIndex}) {

   const showMore=(index)=>{
   setIndex(index);
   }
  return (


      
 <>
      
<div key={index} className="max-w-sm p-3  my-2 bg-gray-800 border text-white border-gray-200 rounded-lg shadow dark:bg-gray-800 ">
    <div>
        <img src={urlToImage || "/newsImg.jpg"} alt="" />
    </div>
    <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight   text-white">{title.slice(0,30)}</h5>
    </a>
    <p className="mb-3 font-normal text-white">  {description ? (description.length > 90 ? `${description.slice(0, 90)}...` : description) : "No description available"}</p>
    <Link to={"/showmore"} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center  bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>showMore(index)}>
        Read more
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </Link>
</div>
 

 </>
 
    
  )
}

export default Card
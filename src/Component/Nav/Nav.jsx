import React,{useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import DropDown from '../DropDown'

function Nav({setCategories,setInputSearch,categories}) {
    const location = useLocation();
    const [inputvalue, setInputValue] = useState('');
    const [showDropDown, setShowDropdown] = useState(true);
    const submitHandler=(e)=>{
        e.preventDefault()
        setInputSearch(inputvalue)
        setInputValue('')
    }
    const inputHander=(e)=>{
        setInputValue(e.target.value)
    }

    const navbtn=[
        {
            name:'Home',
            to:"/"
        },
    
    ]

    useEffect(() => {
        // Check if the current path is not home ("/") and hide the dropdown
        if (location.pathname !== '/') {
          setShowDropdown(false);
        } else {
          setShowDropdown(true);
        }
      }, [location]);
  return (
   <div className="contsiner-fluid  text-white">
    <div className="flex bg-gray-800 py-2 fixed  shadow-lg  w-full ">
        <div className='py-2 px-5'>
            <h1 className='rounded text-white  font-semibold px-4 '>Breaking <span className='bg-rose-500 rounded text-white font-semibold px-4 py-2'>News</span></h1>
        </div>
        <ul className='flex gap-16 py-2 px-5'>
            {
                navbtn.map((item,index)=>(
                    <li key={index}>
                        <Link to={item.to} className='btn bg-blue-500 px-4 py-2  rounded font-semibold shadow'>{item.name}</Link>
                    </li>
                ))
            }
         
          
        
        </ul>
    {
        showDropDown &&<DropDown setCategories={setCategories} categories={categories}/> 
    }
    
    <div className=' border-red-300  flex justify-end w-1/2 '>
       <form action="" onSubmit={submitHandler}>

        <input type="search" name="" id="" className='  rounded  py-2 px-4 text-black ' value={inputvalue} placeholder='search' onChange={inputHander} />
        <button className='px-4 mx-3 py-2 bg-blue-500 font-semibold rounded' >Search </button>
       </form>
    </div>
    </div>

   </div>
  )
}

export default Nav
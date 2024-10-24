import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ShowMore({index,categories,inputSearch}) {
    const [filterData, setfilterData] =useState([])
    const [isLoading, setIsLoading] = React.useState(false)
 
   async function getAppleNews() {
       setIsLoading(true)
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${inputSearch}&category=${categories}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
       
        // Now filter the articles after getting the response
    const filteredArticle = response.data.articles.filter((article, i) => i === index);
    console.log(filteredArticle)
    setfilterData(filteredArticle);
    setIsLoading(false)
        
    } catch (error) {
        setIsLoading(false)
        console.error("Error fetching news:", error);
    }
    }

    useEffect(()=>{
    getAppleNews()
    },[categories])
 console.log(filterData)
 if(filterData.length<=0){
   return(
    <div className="text-center w-full h-screen">
    <img src="/Loading_icon.gif" alt="" className='w-full h-screen' />
</div>
   )
 }
  return (
    <>
    {
        isLoading? (
            <div className="text-center w-full h-screen">
                <img src="/Loading_icon.gif" alt="" className='w-fulll' />
            </div>
        )
        :
    <div className='container-fluid'>
    <div className="flex shadow-lg mt-5 p-5 text-black border w-full ">
        <div className='p-2'> 
            <img src={filterData[0].urlToImage} alt="" />
        </div>
        <div className='space-y-4 p-2'>
        <p className='text-xl'><b>Title:</b>{filterData[0].title}</p>
        <p><b>Content:</b>{filterData[0].content}</p>
        <p> <b>PublishedAt:</b>{filterData[0].publishedAt}</p>
        <p> <b>Author:</b>{filterData[0].publishedAt}</p>

        <p><Link to={"/"} className=" items-center  px-3 py-2  text-sm font-medium text-center  bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none text-white focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
        Back to Home 
    </Link></p>
        </div>
        {/* ==================btn================ */}
       
       
    </div>

    </div>
    }
    </>
  )
}

export default ShowMore
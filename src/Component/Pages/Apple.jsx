import React, { useEffect } from 'react'
import axios from 'axios';
import Card from './Card';
import DropDown from '../DropDown';

function Apple({categories,inputSearch,setIndex}) {
    
    const [appleNews, setAppleNews] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    
 
   async function getAppleNews() {
    setIsLoading(true)
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${inputSearch}&category=${categories}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
        setAppleNews(response.data.articles);

        setIsLoading(false)
        
    } catch (error) {
        setIsLoading(false)
        console.error("Error fetching news:", error);
    }
    }

    useEffect(()=>{
    getAppleNews()
    },[categories])
  return ( 
    <>
    {
        isLoading? (
            <div className="text-center w-full h-screen">
                <img src="/Loading_icon.gif" className='w-full h-screen' alt="" />
            </div>
        ) : <div className="container-fluid">
        <div className=" ml-7  grid grid-cols-3 ">
        {
            appleNews.map((appleNews, index) => (
                <Card key={index} title={appleNews.title} urlToImage={appleNews.urlToImage}  description={appleNews.description} index={index} setIndex={setIndex}/>
            ))   
        }
        </div>
       </div>
    } 
    </>
  
  )
}

export default Apple
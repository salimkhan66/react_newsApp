import React, { useEffect } from 'react'
import axios from 'axios';
    function Categories({categories}) {
        const [categoriesData, setCategoriesData] = React.useState([])
        async function getAppleNews() {
            const respones= axios.get(`https://newsapi.org/v2/top-headlines/sources?category=${categories}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
            respones.then(response => console.log(response.data))
           
            respones.catch(error => console.error(error))
         }

         useEffect(()=>{
         getAppleNews()
         },[])
  return (
    
 <div>
    <h1>hello</h1>
 </div>
  )
}

export default Categories
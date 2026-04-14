import React from 'react'
import "./SearchProduct.css"
import ProdactCard from '../../components/prodactCard/ProdactCard'
function SearchProduct({   data,searchData}) {
    console.log(searchData);
    
  return (
    <div className='SearchProduct'>
        <div className="container">
            <h2>Qidiruv</h2>
        <div className="prodactCards">
            {
                data?.map((item,index)=>{
                   return <ProdactCard key={index} item={item}/>
                })
            }
         
        </div>
        </div>
    </div>
  )
}

export default SearchProduct
import React,{useState} from 'react';
import Data from './City.json'
import './Filter.css';
function Filter(){
    const [search,setSearch]=useState('');
    return(
        <div>
            <h1 className='searchfilter_heading'>Search City By Name</h1>
            <input className='search_box'placeholder='Search...' type='text' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <br/>
                {Data.filter(city=>city.name.toLocaleLowerCase().includes(search)).map(city=>{
                    return <div className='data'>
                    <div className='table_data'>
                        {city.name}
                        </div>
                        </div>
                })}
        
        </div>
    )
}
export default Filter;
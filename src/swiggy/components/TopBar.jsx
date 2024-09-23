import React from 'react'
import {Link} from 'react-router-dom'



const TopBar = () => {
  return (
    <section className="topbarSection">
        <div className="companyTitle">
          <Link to="/" className='link'>
          <h2>Swiggy</h2>
          </Link> 
            
        </div>
        <div className="searchbar">
            <input type="text" placeholder='search...'  />
        </div>
        <div className="userAuth">
            Login / SignUp 
        </div>
    </section>
  )
}

export default TopBar

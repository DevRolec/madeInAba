import React from 'react'
import './Discover.css'
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";


const Discover = () => {
  return (
    <div>
        <div className="discover">
        {/*firstsection begins*/}
        <div className="supplier">
        <div className='suho'>
           <a href="Home">Supplier Homepage</a></div>
        
        <div className="arrowright"><MdKeyboardArrowRight /></div>
        <div className="text">Discover</div>
      </div>
      {/*firstsection ends*/}

      {/*secondsection begins */}
      <div className="follows">
        <button className="plusfollows">
        <div className="plus"><BsPlusLg color="white" /></div>
        <div className="follow"><h5>Follow</h5></div>
        </button>
        <p>Once followed, you will receive an update reminder email</p>
      </div>
      {/*secondsection ends */}
      {/*thirdsection */}
      <div className="latest">
        <div className="latests"><h3>Latest updates from this supplier</h3></div>
        <div className="all">
          <label htmlFor="all"></label>
          <select name="all" id="all">
            <option value="All">All</option>
            <option value="short videos" >Short Videos</option>
            <option value="New Products">New Products</option>
            <option value="Product Catalogs">Product Catalogs</option>
            <option value="Company Show">Company Show</option>
          </select>
        </div>
      </div>
      {/*thirdsection */}
      </div>
    </div>

  )
}

export default Discover

import React from 'react';
import "./branddetails.css"

function BrandDetails() {
  return (
    <>
        <div className="main">
            <div className="info">
                <h1 className='title' >YOUR FEET DESERVE THE BEST</h1>

                <p className='brandDetails'>YOUR FEET DESERVE THE NEST AND WE ARE HERE TO <br/>
                    HELP YOU WITH OUR SHOES YOUR FEET DESERVE <br/>
                    THE BEST AND WE'RE HERE TO HELP YOU WITH OUR <br/>
                    SHOES.
                </p>

                <div className="shopdetails">
                    <button className="shopnow">Shop Now</button>
                    <button className="category">Category</button>
                </div>    
            </div>
            <img src="../../public/shoesImg.jpg" alt='shoeImg' className="productImg"></img>
        </div>
    </>
  )
}

export default BrandDetails
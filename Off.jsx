import React from 'react'
import './Style.css'

const Off = () => {
  return (
    <>
    <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
  Toggle static offcanvas
</button>

<div className="offcanvas offcanvas-start"  style={{width:'40% '}} data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title " id="staticBackdropLabel"></h5>
    <button type="button" className="btn-close ghj" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body pt-5" >
    <div className='text-center'>
     <input type="text" className='py-2 hjh px-3' placeholder='Search for area,street name...' style={{width:'70%'}} name="" id="" />
    </div>
    <div className='kl'>
        
    </div>
  </div>
</div>
    </>
  )
}

export default Off
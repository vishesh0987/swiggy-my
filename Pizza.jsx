import React from 'react'
import './Style.css'
import Card from './Card'

const Pizza = () => {
  return (
<>
<div className="container-fluid pt-5">
    <div className="container pt-2">
        <div className="row">
            <h1 className='fw-bold'>Pizza</h1>
            <p className='py-3'>Cheesilicious pizzas to make every day extraordinary.</p>

        </div>
        <div className="row">
            <div className="col-md-12">
            <button type="button" className="buttt">Filter <span><i className="fa-solid fa-filter"></i></span></button>
            
            <button type="button" className="buttt mx-3 px-1">Sort By <span><i className="fa-solid fa-chevron-down"></i></span></button>
            
            <button type="button" className="buttt mx-3">Pure Veg</button>
           
            <button type="button" className="buttt mx-3">Less than 30 mins</button>  
            
            <button type="button" className="buttt mx-3">Rs.300-Rs.600</button>      
            
                <button type="button" className="buttt">less than Rs.300</button></div>
        </div>
        <div className="row">
            <h3 className='fw-bold py-4'>Restaurants to explore</h3>
        </div>
        {/* <div className="row">
            <div className="col-md-3">
            <div class="card" >
  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xqtymlvxlpsfj9nbq2j2" style={{width:'100%', height:'200px'}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">La Pino'z Pizza</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            </div>
            <div className="col-md-3">
            <div class="card" >
  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nxfyiclib9euzefgxb3e" style={{width:'100%', height:'200px'}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            </div>
            <div className="col-md-3">
            <div class="card" >
  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cziiapygd3qa7w2pdasm" style={{width:'100%', height:'200px'}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            </div>
            <div className="col-md-3">
            <div class="card" >
  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bnuk8inxoz0m22miz1c5" style={{width:'100%', height:'200px'}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            </div>
       
        </div> */}

<div className='row'>
  <div className='col-md-12 d-flex justify-content-evenly '>
  
    <Card title="La Pino'z Pizza" />
    <Card title='Dominic Pizza'/>
    <Card title="Pizza Galleria "/>
    <Card title="Hash Guys"/>

  
  </div>
</div>
<div className='row py-2 '>
  <div className='col-md-12 d-flex justify-content-evenly '>
  
    <Card title="Pizza Wings" />
    <Card title='Dominic Pizza'/>
    <Card title="Oven Story Pizza-Standout "/>
    <Card title="Pizza Hut"/>

  
  </div>
</div>
    </div>
</div>
</>
  )
}

export default Pizza
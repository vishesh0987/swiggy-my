import React from 'react'

function Card(props) {
  return (
    <>
       <div className="div">
       <div class="card" style={{width:'15rem'}}>
  <img src="" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
       </div>
    </>
  )
}

export default Card
import React from 'react'

function Home() {
  return (
  
    <div>
      <div className='add-to-cart'>
       <img src='https://static.vecteezy.com/system/resources/previews/000/491/196/original/vector-shopping-cart-icon-design.jpg'/>
      </div>
      <h1>Hello Component</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
            <img src='https://farm2.staticflickr.com/1904/31005812318_2a8971c140_b.jpg'/>
        </div>

        <div className='text-wrapper item'>
          <span>
            I-Phone
          </span>  

          <span>
            Price: $1000.00
          </span>  
        </div>

        <div className='btn-wrapper item'>
           <button>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Home;

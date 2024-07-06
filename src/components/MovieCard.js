import React from 'react'

const MovieCard = ({title,img,detail }) => {

  return (
    <div className='w-[200px] h-[300px] '>
       <img className='w-[100%] h-[200px] ' src={img}/>   
      <div>
            <p>{title}</p>
            <p>{detail}</p>
        </div>
     
    </div>
  )
}

export default MovieCard

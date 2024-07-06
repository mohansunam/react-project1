import React from 'react'
import MovieCard from '../components/MovieCard'

const Home = () => {
  return (
    <div>
      <MovieCard title='Avatar' detail= 'this movie is created by james' img = 'https://t3.ftcdn.net/jpg/05/24/30/02/360_F_524300228_egMskw0zvvdwNUFPeJLlplclKzFamXBk.jpg'  />

      <MovieCard title='Avengers' detail= 'this movie is created by jfarnades ' img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf_DExW6rj3NVMch0Ayj8Z6OMBMNBtMw5rWw&s'/>
      <MovieCard title='Captain America' detail= 'this movie is created by rechards ' img = 'https://i.pinimg.com/736x/dd/97/3a/dd973ac116a977c8dd5296b0da504b8c.jpg'/>
      
      
    </div>
  )
}

export default Home


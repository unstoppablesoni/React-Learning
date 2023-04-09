import React from 'react'
import './App.css';
import Header from './Components/Header';
import Movie from './Components/Movie';
import movie from './movie.json'
// import element  from 'prop-types';

const App = () => {
  return (
    <div className='App'>
     <Header/>
     <div className='Main'>
     {
      movie.map((element,index)=>{
        return (
       <Movie 
       key={index}
       title={element.Title} 
       year={element.Year}
       img={element.Poster} 
       />
        )
      })
     }
     </div>
    </div>
  )
}

export default App
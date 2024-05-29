import React from "react";
import {movies} from "./moviesData";
import Navbar from "./Navbar";
import MovieList from "./Movielist";



class App extends React.Component {
  constructor(){
    super();
    this.state={
        movies: movies,
        cartCount:0
    }
  }

//STATES
handleIncStar=(movie)=>{
    const {movies}=this.state;
    const mid=movies.indexOf(movie);
    if(movies[mid].stars >= 5){
      return;
    }
    movies[mid].stars += 0.5;
    this.setState({
        movies: movies
    })
}

handleDecStar=(movie)=>{
    const {movies}=this.state;
    const mid=movies.indexOf(movie);
    if(movies[mid].stars <= 0){
        return;
    }
    movies[mid].stars -= 0.5;
    this.setState({
        movies: movies
    })
}

handleToggleFav=(movie)=>{
    const {movies}=this.state;
    const mid=movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;
    this.setState({
        movies:movies
    })
}

handleToggleCart=(movie)=>{
    let {movies, cartCount}=this.state;
    const mid=movies.indexOf(movie);
    movies[mid].isIncart = !movies[mid].isIncart;

    //if (movies[mid].isIncart) is true,carCount should increase
    if(movies[mid].isIncart){
      cartCount=cartCount+1;
    }
    else{
      cartCount -= 1;
    }
  
    this.setState({
        movies:movies,
        cartCount:cartCount
    })
    console.log(cartCount);
}




  render(){
    const {movies,cartCount}=this.state;
    return (
      <>
      <Navbar cartCount={cartCount}/> {/* passing cartCount to Navbar through props*/}
      
      <MovieList movies={movies}   /*passing movies,addStars,decStars,toggleFav,toggleCart to MovieList through props*/
                addStars={this.handleIncStar}
                decStars={this.handleDecStar}
                toggleFav={this.handleToggleFav}
                toggleCart={this.handleToggleCart}
      />
      </>
    );
  }
}

export default App;

import MovieCard from "./Moviecard";

function MovieList(props){
        //everything is received from </App> using props
        const {movies,addStars,decStars,toggleFav,toggleCart} = props; 
        //console.log(props);
        return(
            <>
            {/*mov here is an object of MovieCard class*/}
            {/*passing mov,addStars,decStars,toggleFav,toggleCart to MovieCard through props*/}
            {movies.map((movie) => <MovieCard mov={movie} 
                                              addStars={addStars}
                                              decStars={decStars}
                                              toggleFav={toggleFav}
                                              toggleCart={toggleCart}
                                              key={movie.id}     
                                    />)} 
            </>
        )
}
export default MovieList;
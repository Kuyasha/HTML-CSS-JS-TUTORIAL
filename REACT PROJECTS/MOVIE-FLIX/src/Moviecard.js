import "./index.css";

function MovieCard(props){
        //everything is received from </MovieList> using props
        const {mov, addStars, decStars, toggleFav, toggleCart} =props;
        const {title,plot,price,rating,stars,fav,isIncart} = props.mov; //destructure everything using mov object of MovieList class

        return (
            <div className="main">
                <div className="movie-card">

                    <div className="left">
                        <img alt="Poster" src="https://www.themoviedb.org/t/p/original/pdhOE0NAZaPzjsgTvatRP1xFhG3.jpg" />
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png" onClick={()=>{decStars(mov)}} />
                                <img className="stars" alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />
                                <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/32/32563.png" onClick={()=>{addStars(mov)}} />
                                <span>{stars}</span>
                            </div>
                            <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={()=>{toggleFav(mov)}}> {fav?"Unfavourite":"Favourite"} </button>
                            <button className={isIncart?"removecart-btn":"addcart-btn"} onClick={()=>{toggleCart(mov)}}> {isIncart?"Remove":"Add to cart"} </button>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default MovieCard;
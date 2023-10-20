const Movie=(props)=>{
    return(
        <div className="movie">
            {/* <img src="https://bestsimilar.com/img/movie/thumb/b4/55066.jpg" alt="" /> */}
            <img src={props.img}alt="" />
            <p>{props.title}</p>
            <p>{props.year}</p>

        </div>
    )
}
export default Movie ;

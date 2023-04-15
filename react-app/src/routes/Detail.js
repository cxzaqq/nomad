import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const {id} = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
        console.log(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (<div>
        {loading ? <h1>Loading...</h1> : 
        <div>
            <img src={movie.medium_cover_image} alt=""/>
            <h2>{movie.title}({movie.year}) ⭐{movie.rating}</h2>
            <ul>
                {movie.genres.map(g => <li key={g}>{g}</li>)}
            </ul>
            <p>{movie.description_full}</p>
        </div>}
    </div>);
}

export default Detail;
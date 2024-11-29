import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from '../../services/api';
import './home.css';


function Home(){
    const [ movies, setMovies] = useState([]);


    useEffect(()=>{
        async function loadMovies(){
            const response = await api.get('movie/now_playing',{
                params:{
                    api_key: '434b3e90692dea358c00e31a229581d2',
                    language:'en-US',
                    page: 1,
                }
            });

            setMovies(response.data.results.slice(0, 10));
        }

        loadMovies();
    }, []);


    return(
        <div className="container">
            <div className="listMovie">
                {movies.map((movie)=>{
                    return(
                        <article key={movie.id}>
                            <img alt={movie.title} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                            <strong>{movie.title}</strong>
                            <Link to={`/movie/${movie.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    );
}

export default Home;
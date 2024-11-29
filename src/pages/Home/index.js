import { useEffect, useState } from "react";
import api from '../../services/api';


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

            console.log(response);
        }

        loadMovies();
    }, []);


    return(
        <div>
            <h1>Bem vindo a Home</h1>
        </div>
    );
}

export default Home;
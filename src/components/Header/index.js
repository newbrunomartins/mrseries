import { Link } from 'react-router-dom';
import './header.css';


function Header(){
    return(
        <header>
            <Link className='logo' to='/'>Mr. Series</Link>
            <Link className='bookmarks' to='bookmarks'>Meus Filmes</Link>
        </header>
    );
}

export default Header;
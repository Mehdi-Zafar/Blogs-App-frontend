import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBlog} from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {

    function handleClick(){
        const nav1 = document.getElementById('small-nav1')
        const nav2 = document.getElementById('small-nav2')
        nav1.classList.toggle('hide')
        nav2.classList.toggle('hide')
    }

    function hidenav(){
        const nav1 = document.getElementById('small-nav1')
        const nav2 = document.getElementById('small-nav2')
        nav1.classList.add('hide')
        nav2.classList.add('hide')
    }

    return ( 
        <nav>
            <div className="large-nav">
                <ul className="leftul">
                    <li className="navbar-brand"><Link to="/"><FontAwesomeIcon icon={faBlog} /> Blogger</Link></li>
                    <li><Link to="/">Home <i class="bi bi-house"></i></Link></li>
                    <li><Link to="/about">About <i class="bi bi-person"></i></Link></li>
                    <li><Link to="/contact">Contact <i class="bi bi-telephone"></i></Link></li>
                </ul>
                <ul className="rightul">
                    <li><Link to="/new-blog">Create new blog <i class="bi bi-pen"></i></Link></li>
                </ul>
            </div>
            <div className="small-nav">
                <li className="navbar-brand"><Link to="/"><FontAwesomeIcon icon={faBlog} /> Blogger</Link></li>
                <div id='small-nav1'>
                    <li><Link to="/" onClick={hidenav}>Home <i class="bi bi-house"></i></Link></li>
                    <li><Link to="/about" onClick={hidenav}>About <i class="bi bi-person"></i></Link></li>
                </div>
                <div id='small-nav2'>
                    <li><Link to="/contact" onClick={hidenav}>Contact <i class="bi bi-telephone"></i></Link></li>
                    <li><Link to="/new-blog" onClick={hidenav}>Create new blog <i class="bi bi-pen"></i></Link></li>
                </div>
            </div>
            <div className="ham-btn" onClick={handleClick}><i class="bi bi-list"></i></div>
        </nav>
     );
}
 
export default Navbar;
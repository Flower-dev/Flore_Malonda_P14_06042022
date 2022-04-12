// routes
import { Link } from 'react-router-dom';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
// custom
import '../custom/components/header.scss';

// ----------------------------------------------------

export default function Header() {
    return (
        <div className='header-container'>
            <div className='header-title'>
                <h1>HRnet</h1>
            </div>
            <div className='header-nav'>
                <div>
                    <Link to='/' className='link-button'>
                        <FontAwesomeIcon icon={faHome} className='header-icons'/>
                    </Link>  
                </div>
                <div>
                    <Link to='employeeList' className='link-button'>
                        <FontAwesomeIcon icon={faList} className='header-icons' />
                    </Link> 
                </div>
            </div>
        </div>
    )
}
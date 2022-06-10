// components
import CreateEmployee from './components/CreateEmployee';
import Presentation from '../components/Presentation';

// custom
import '../custom/pages/home.scss';

/**
* Home page calling components like Presentation and CreateEmployee
* @module Home
*/

export default function Home() {
    return (
        <div className='home-container'>
            <div className='home-presentation'>
                <Presentation />
            </div>
            <div className='home-form'>
                <CreateEmployee/>
            </div>
        </div>
    )
}
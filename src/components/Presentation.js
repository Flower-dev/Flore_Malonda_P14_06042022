// assets
import PresentationImg from '../assets/img/presentation.png';
// custom 
import '../custom/components/presentation.scss';

// ------------------------------------------

export default function Presentation () {
    return (
        <>
            <h2 className='presentation-title'>Create Employee</h2>
            <img src={PresentationImg} alt='presentation' className='presentation-img'/>
        </>
    )
}
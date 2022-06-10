// assets
import PresentationImg from '../assets/img/presentation2.png';
// custom 
import '../custom/components/presentation.scss';

// ------------------------------------------

/**
 * Simple section with a title and an illustration 
 * @module Presentation
 */

export default function Presentation () {
    return (
        <>
            <h2 className='presentation-title'>Create Employee</h2>
            <img src={PresentationImg} alt='presentation' className='presentation-img'/>
        </>
    )
}
// react
import { Fragment } from 'react';
// hooks
import useModal from '../hooks/useModal';
// components
import DatePicker from './DatePicker';
import Select from './Select';
import Modal from './Modal';
// assets
import Confirmation from '../assets/img/confirmation.png';
// custom 
import '../custom/components/createEmployee.scss';
// ----------------------------------------

export default function CreateEmployee() {
    const { isShowing, toggle } = useModal();
    
    const handleSubmit = () => {
        toggle()
        console.log('new employee')
    }

    return (
        <Fragment>
            <form action="#" id="create-employee">
                <input type="text" className='inputForm' placeholder="Jane" />
                <input type="text" className='inputForm' placeholder="Smith" />
                
                <label>Date of Birth</label>
                <DatePicker/>

                <DatePicker/>

                <input type="text" className='inputForm' placeholder="Street" />
                <input type="text" className='inputForm' placeholder="City" />

                <label>State</label>
                <Select/>

                <input type="number" className='inputForm' placeholder="Zip Code" />

                <label for="department">Department</label>
                <Select/>
                <button className='button-save' onClick={handleSubmit}>Save</button>
            </form>

            <Modal 
                isShowing={isShowing} 
                hide={toggle}
                title='Success' 
                info='Congratulations, a new employee has been created! '
                img={Confirmation}
                alt='success'
            />
        </Fragment>
    )
}
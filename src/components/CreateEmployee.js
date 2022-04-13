// react
import { Fragment } from 'react';
// hooks
import useModal from '../hooks/useModal';
// mocks
import state from '../_mocks_/data';
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
        console.log('new employee')
        toggle()
    }

    const department = [
        'Sales',
        'Marketing',
        'Engineering',
        'Human Ressources',
        'Legal',
    ];


    return (
        <Fragment>
            <form>
                <input type='text' className='inputForm' placeholder='Jane' />
                <input type='text' className='inputForm' placeholder='Smith' />
                
                <label>Date of Birth</label>
                <DatePicker/>

                <DatePicker/>

                <input type='text' className='inputForm' placeholder='Street' />
                <input type='text' className='inputForm' placeholder='City' />

                <Select options={state}/>

                <input type='number' className='inputForm' placeholder='Zip Code' />

                <Select options={department}/>
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
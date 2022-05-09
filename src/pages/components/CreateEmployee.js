// react
import { Fragment, useState } from 'react';
// hooks
import useModal from '../../hooks/useModal';
// mocks data
import {stateList, departmentList} from '../../_mocks_/data';
// components
import DatePicker from '../../components/DatePicker';
import Select from '../../components/Select';
import Modal from '../../components/Modal';
import FormInput from '../../components/FormInput';
// assets
import Confirmation from '../../assets/img/confirmation.png';
// custom 
import '../../custom/components/createEmployee.scss';
// import DatePicker  from 'datepickerplugin';

// ----------------------------------------

export default function CreateEmployee() {
    const { isShowing, toggle } = useModal();

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ startDate, setStartDate ] = useState('');
    const [ department, setDepartment ] = useState('');
    const [ dateOfBirth, setDateOfBirth ] = useState('');
    const [ street, setStreet ] = useState('');
    const [ city, setCity ] = useState('');
    const [ state, setState ] = useState('');
    const [ zipCode, setZipCode ] = useState('');

    let arrInfos = JSON.parse(localStorage.getItem('infosEmployee')) || [];
  
    const infosEmployee = {
		firstName, 
		lastName, 
		startDate,
		department,
		dateOfBirth, 
		street, 
		city, 
		state,
		zipCode, 
	};

    const handleSubmit = (e) => {
		e.preventDefault();
		arrInfos.push(infosEmployee);
		const infosEmployeeStorage = JSON.stringify(arrInfos);
		localStorage.setItem('infosEmployee', infosEmployeeStorage);
        toggle()
	};

    return (
        <Fragment>
            <form method='post'>
                <div className='input-name-info'>
                    <p className='subtitleForm'> - Personal information - </p>
                    <FormInput 
                        placeholder='First Name' 
                        type='text'
                        name='firstName' 
                        required
                        onChange={(value) => setFirstName(value)}
                    />
                    <FormInput
                        placeholder='Last Name'
                        type='text'
                        name='lastName'
                        required
                        onChange={(value) => setLastName(value)}
                    />
                    <div className='container-forminput'>
                        <div>
                            <label className='labelForm'>Date of Birth</label>
                        </div>
                        <div>
                            {/* <DatePicker 
                                onChange={(value) => setDateOfBirth(value)}
                            /> */}
                            <DatePicker 
                                onChange={(value) => setDateOfBirth(value)}
                            />
                        </div>
                    </div> 
                </div>

                <div className='input-address-infos'>
                    <p className='subtitleForm'> - Address - </p>
                    <FormInput 
                        placeholder='Street'
                        type='text'
                        name='street'
                        required
                        onChange={(value) => setStreet(value)}
                    />
                    <div className='input-block-city'>
                        <div className='input-block'>
                            <FormInput 
                                placeholder='City'
                                type='text'
                                name='city'
                                required
                                onChange={(value) => setCity(value)}
                            />
                        </div>
                        <div className='input-block'>
                            <FormInput 
                                placeholder='Zip Code'
                                type='number' 
                                name='zipCode'
                                required
                                onChange={(value) => setZipCode(value)}
                            />
                        </div>
                        <div className='input-block'>
                            <Select 
                                options={stateList} 
                                name='state'
                                required
                                onChange={(value) => setState(value)}
                            />
                        </div>
                    </div>
                </div>

                <div className='input-pro-info'>
                    <p className='subtitleForm'> - Professional information - </p>
                    <Select 
                        options={departmentList} 
                        name='department'
                        required
                        onChange={(value) => setDepartment(value)}
                    />
                    <div className='container-forminput'>
                        <div>
                            <label className='labelForm'>Starting Date</label>
                        </div>
                        <div>
                            <DatePicker 
                                onChange={(value) => setStartDate(value)}
                            />
                        </div>
                    </div> 
                </div>

                <button className='button-save' onClick={(e) => handleSubmit(e)}>Save</button>
            </form>
 
            <Modal 
                isShowing={isShowing} 
                hide={toggle}
                title='Success' 
                info='Congratulations, a new employee has been created!'
                img={Confirmation}
                alt='success'
            />
            
        </Fragment>
    )
}
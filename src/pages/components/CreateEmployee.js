// react
import { Fragment } from 'react';
// hooks
import useModal from '../../hooks/useModal';
// mocks data
import {state, department} from '../../_mocks_/data';
// components
// import DatePicker from '../../components/DatePicker';
import Select from '../../components/Select';
import Modal from '../../components/Modal';
import FormInput from '../../components/FormInput';
import Form from '../../components/Form';
// assets
import Confirmation from '../../assets/img/confirmation.png';
// custom 
import '../../custom/components/createEmployee.scss';
// ----------------------------------------

export default function CreateEmployee() {
    const { isShowing, toggle } = useModal();

    const initialValues = {
        firstName: '',
        lastName: '',
        startDate: '',
        department: '',
        dateOfBirth: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
    };

    const submit = () => {
        <Modal 
            isShowing={isShowing} 
            hide={toggle}
            title='Success' 
            info='Congratulations, a new employee has been created!'
            img={Confirmation}
            alt='success'
        />
      };
    
    return (
        <Fragment>
            <Form submit={submit} initialValues={initialValues}>
                <FormInput 
                    placeholder='First Name' 
                    type='text'
                    name='firstName'
                    onChange={(value) => console.log(value)}
                />
                <FormInput
                    placeholder='Last Name'
                    type='text'
                    name='lastName'
                    onChange={(value) => console.log(value)}
                />
                <div className='container-forminput'>
                    <div>
                        <label>Date of Birth</label>
                    </div>
                    <div>
                        <FormInput 
                            placeholder='test'
                            type='date' 
                            name='test'
                            onChange={(value) => console.log(value)}
                        /> 
                    </div>
                </div> 
                <div className='container-forminput'>
                    <div>
                        <label>Date Start</label>
                    </div>
                    <div>
                        <FormInput 
                            placeholder='test'
                            type='date' 
                            name='test'
                            onChange={(value) => console.log(value)}
                        /> 
                    </div>
                </div> 
                {/* <label>Date of Birth</label>
                <DatePicker/>
                <label>Date Start</label>
                <DatePicker/> */}
                <FormInput 
                    placeholder='Street'
                    type='text'
                    name='street'
                    onChange={(value) => console.log(value)}
                />
                <FormInput 
                    placeholder='City'
                    type='text'
                    name='city'
                    onChange={(value) => console.log(value)}
                />
                <Select 
                    options={state} 
                    name='state'
                    onChange={(value) => console.log(value)}
                />
                <FormInput 
                    placeholder='Zip Code'
                    type='number' 
                    name='zipCode'
                    onChange={(value) => console.log(value)}
                />
                <Select 
                    options={department} 
                    name='department'
                    onChange={(value) => console.log(value)}
                />
            </Form>


            <button type="button" onClick={toggle}>
                Open Modal
            </button> 

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
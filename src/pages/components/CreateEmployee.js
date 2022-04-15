// react
import { Fragment } from 'react';
// hooks
import useModal from '../../hooks/useModal';
// mocks data
import state from '../../_mocks_/data';
// components
import DatePicker from '../../components/DatePicker';
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
            info='Congratulations, a new employee has been created! '
            img={Confirmation}
            alt='success'
        />
      };
    

    const department = [
        'Sales',
        'Marketing',
        'Engineering',
        'Human Ressources',
        'Legal',
    ];


    return (
        <Fragment>
            <Form submit={submit} initialValues={initialValues}>
                <FormInput 
                    placeholder='First Name' 
                    type='text'
                    name='firstName'
                />
                <FormInput
                    placeholder='Last Name'
                    type='text'
                    name='lastName'
                />      
                <label>Date of Birth</label>
                <DatePicker/>
                <DatePicker/>
                <FormInput 
                    placeholder='Street'
                    type='text'
                    name='street'
                />
                <FormInput 
                    placeholder='City'
                    type='text'
                    name='city'
                />
                <Select 
                    options={state} 
                    name='state'
                    id='state'
                />
                <FormInput 
                    placeholder='Zip Code'
                    type='number' 
                    name='zipCode'
                />
                <Select 
                    options={department} 
                    name='department'
                    id='department'
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
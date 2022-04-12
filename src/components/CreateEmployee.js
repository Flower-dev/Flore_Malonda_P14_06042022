// react
import { Fragment } from 'react';
// components
import DatePicker from './DatePicker';
import Select from './Select';
// custom 
import '../custom/components/createEmployee.scss';
// ----------------------------------------

export default function CreateEmployee() {
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
            </form>
            <button className='button-save' >Save</button>
        </Fragment>
    )
}
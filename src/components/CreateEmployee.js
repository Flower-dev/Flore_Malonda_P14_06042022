// components
import Select from './Select';
// custom 
import '../custom/components/createEmployee.scss';
// ----------------------------------------

export default function CreateEmployee() {
    return (
        <div className="form-container">
            <form action="#" id="create-employee">

                <input type="text" className='inputForm' placeholder="Jane" />
                <input type="text" className='inputForm' placeholder="Smith" />
                
                <label>Date of Birth</label>
                <input id="date-of-birth" type="text" />

                <label>Start Date</label>
                <input id="start-date" type="text" />

                <input type="text" className='inputForm' placeholder="Street" />
                <input type="text" className='inputForm' placeholder="City" />

                <label>State</label>
                <Select/>

                <input type="number" className='inputForm' placeholder="Zip Code" />

                <label for="department">Department</label>
                <Select/>
            </form>
            <button className='button-save' onclick="saveEmployee()">Save</button>
        </div>
    )
}
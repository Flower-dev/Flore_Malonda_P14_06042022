// routes
import { Link } from 'react-router-dom';
// components
import TableList from '../components/Table';

export default function EmployeeList() {
    return (
        <div id='employee-div' className='container'>
            <h1>Current Employees</h1>
            <TableList/>
            <button className='button-nav'>
                    <Link to='/' className='link-button'>Home</Link> 
            </button>
        </div>
    )
}
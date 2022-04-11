// routes
import { Link } from 'react-router-dom';
// components
import CreateEmployee from '../components/CreateEmployee';
// custom
import '../custom/pages/home.scss';

export default function Home() {
    return (
        <div className='container-max'>
            <div className='title'>
                <h1>HRnet</h1>
                <button className='button-nav'>
                    <Link to='employeeList' className='link-button'>View Current Employees</Link> 
                </button>
            </div>
            <div className='container-home-form'>
                <h2>Create Employee</h2>
                <CreateEmployee/>
            </div>
            {/* <div id='confirmation' className='modal'>Employee Created!</div> */}
        </div>
    )
}
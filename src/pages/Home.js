import { Link } from 'react-router-dom';
// components
import CreateEmployee from '../components/CreateEmployee';

export default function Home() {
    return (
        <>
            <div className='title'>
                <h1>HRnet</h1>
                <nav
                    style={{
                    borderBottom: 'solid 1px',
                    paddingBottom: '1rem',
                    }}
                >
                    <Link to='employeeList'>View Current Employees</Link> 
                </nav>
            </div>
            <div className='container'>
                <h2>Create Employee</h2>
                <CreateEmployee/>
            </div>
            {/* <div id='confirmation' className='modal'>Employee Created!</div> */}
        </>
    )
}
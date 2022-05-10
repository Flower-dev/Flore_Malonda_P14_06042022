import { useState, useEffect } from 'react';
// components
import TableSearch from '../components/TableSearch';
// custom
import '../custom/pages/employeeList.scss';

// -----------------------------------------------
export default function EmployeeList() {
    const [employeesInfos, setEmployeesInfos] = useState([]);

    useEffect( () => {
		let data = JSON.parse(localStorage.getItem('infosEmployee'));
		setEmployeesInfos(data);
	}, []);
         
    const tableHead  = [
        { label: 'First Name', id: 'firstName' },
        { label: 'Last Name', id: 'lastName' },
        { label: 'Date of Birth', id: 'dateOfBirth' },
        { label: 'Starting Date', id: 'startDate' },
        { label: 'State', id: 'state' },
        { label: 'City', id: 'city' },
        { label: 'Street', id: 'street' },
        { label: 'Zip Code', id: 'zipCode' },
        { label: 'Department', id: 'department' },
    ]

    return (
        <>
            <h3 className='title-employee'>Employees' list</h3>
            <div className='table-container'>
                {employeesInfos?.length >= 1 ? 
                < TableSearch 
                    tableHead={tableHead}
                    tableBody={employeesInfos}
                    valueLabelBody={false}
                />
                : 'Please create an employee to see their informations'}
            </div>
        </>
    )
}
import { useState, useEffect } from 'react';
// components

import TableSortBox from '../components/Table';
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
        { label: 'Start Date', id: 'startDate' },
        { label: 'Department', id: 'department' },
        { label: 'Date of Birth', id: 'dateOfBirth' },
        { label: 'Street', id: 'street' },
        { label: 'City', id: 'city' },
        { label: 'State', id: 'state' },
        { label: 'Zip Code', id: 'zipCode' },
    ]
    const tableBody = () => {
        <p>no data</p>
    }
    return (
        <div className='table-container'>
            {employeesInfos?.length >= 1 ? 
                <TableSortBox 
                    title='Current Employee'
                    tableHead={tableHead}
                    tableBody={tableBody()}
                    valueLabelBody={false}
                />
            : 'Please create an employee to see their informations'}
        </div>
    )
}
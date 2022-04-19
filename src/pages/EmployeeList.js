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
        { header: "First Name", field: "firstName" },
        { header: "Last Name", field: "lastName" },
        { header: "Date of Birth", field: "birthDate" },
        { header: "Start Date", field: "startDay" },
        { header: "State", field: "state" },
        { header: "City", field: "city" },
        { header: "Street", field: "Street" },
        { header: "Zip Code", field: "zipCode" },
        { header: "Department", field: "deparment" },
    ]
 
    return (
        <div className='table-container'>
            {employeesInfos?.length >= 1 ? 
                <TableSortBox 
                    title='Current Employee'
                    tableHead={tableHead}
                    data={employeesInfos}
                />
            : 'Please create an employee to see their informations'}
        </div>
    )
}
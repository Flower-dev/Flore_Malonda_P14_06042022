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
        { header: "City", field: "city" },
        { header: "Date of Birth", field: "birthDate" },
        { header: "Department", field: "deparment" },
        { header: "First Name", field: "firstName" },
        { header: "Last Name", field: "lastName" },
        { header: "Start Date", field: "startDay" },
        { header: "State", field: "state" },
        { header: "Street", field: "Street" },
        { header: "Zip Code", field: "zipCode" },
    ]
 
    return (
        <div className='table-container'>
            {employeesInfos?.length >= 1 ? 
                <TableSortBox 
                    title='Current Employee'
                    tableHead={tableHead}
                    data={employeesInfos}
                    valueLabelBody={false}
                />
            : 'Please create an employee to see their informations'}
        </div>
    )
}
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
        { label: "First Name", id: "firstName" },
        { label: "Last Name", id: "lastName" },
        { label: "Date of Birth", id: "birthDate" },
        { label: "Start Date", id: "startDay" },
        { label: "State", id: "state" },
        { label: "City", id: "city" },
        { label: "Street", id: "street" },
        { label: "Zip Code", id: "zipCode" },
        { label: "Department", id: "department" },
    ]

    const tableBody = () =>
		employeesInfos.map((employee) => {
			const values = [];
			const labels = [];
			values.push(
                employee.firstName, 
                employee.lastName, 
                employee.birthDate, 
                employee.startDay,
                employee.state,
                employee.city,
                employee.street,
                employee.zipCode,
                employee.department
            );
			labels.push(
				employee.firstName, 
                employee.lastName, 
                employee.birthDate, 
                employee.startDay,
                employee.state,
                employee.city,
                employee.street,
                employee.zipCode,
                employee.department
			);
			const dataValues = {};
			const dataLabels = {};
			let i = 0;
			tableHead.forEach((label) => {
				dataValues[label.id] = values[i];
				dataLabels[label.id] = labels[i];
				i += 1;
			});
			return { value: dataValues, label: dataLabels };
	});
 
    return (
        <div className='table-container'>
            {employeesInfos?.length >= 1 ? 
                <TableSortBox 
                    title='Current Employee'
                    tableHead={tableHead}
                    tableBody={tableBody()}
                />
            : 'Please create an employee to see their informations'}
        </div>
    )
}
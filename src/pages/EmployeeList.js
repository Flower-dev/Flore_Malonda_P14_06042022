import { useState, useEffect } from 'react';
// components
import TableSortBox from '../components/Table';
import TableSearch from '../components/TableSearch';
// custom
import '../custom/pages/employeeList.scss';

// -----------------------------------------------
export default function EmployeeList() {
    const [employeesInfos, setEmployeesInfos] = useState([]);

    useEffect( () => {
		let data = JSON.parse(localStorage.getItem('infosEmployee'));
		setEmployeesInfos(data);
        console.log(data)
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

    const tableBody = () =>
		employeesInfos.map((el) => {
			const values = [];
			const labels = [];
			values.push(
                el.firstName, 
                el.lastName, 
                el.dateOfBirth, 
                el.startDate,
                el.state,
                el.city,
                el.street,
                el.zipCode,
                el.department
            );
			labels.push(
				el.firstName, 
                el.lastName, 
                el.dateOfBirth, 
                el.startDate,
                el.state,
                el.city,
                el.street,
                el.zipCode,
                el.department
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
            < TableSearch 
                tableHead={tableHead}
            />
            {employeesInfos?.length >= 1 ? 
                <TableSortBox 
                    title="Employees' list"
                    tableHead={tableHead}
                    tableBody={tableBody()}
                    valueLabelBody={false}
                    defaultSort={{ order: 'asc', orderBy: 'firstName' }}
                />
            : 'Please create an employee to see their informations'}
        </div>
    )
}
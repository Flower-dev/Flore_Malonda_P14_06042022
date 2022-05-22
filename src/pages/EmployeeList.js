import { useState, useEffect } from 'react';
// components
import TableSearch from '../components/TableSearch';
// custom
import '../custom/pages/employeeList.scss';
// assets
import NoData from '../assets/img/noData.png';
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

    const tableBody = employeesInfos?.map((employee) => {
		const values = [];
		const labels = [];
		values.push(
			employee.firstName,
            employee.lastName,
            new Date(employee.dateOfBirth).toDateString(),
            new Date(employee.startDate).toDateString(),
            employee.state,
            employee.city,
            employee.street,
            employee.zipCode,
            employee.department
		);
		labels.push(
			employee.firstName,
            employee.lastName,
            new Date(employee.dateOfBirth).toDateString(),
            new Date(employee.startDate).toDateString(),
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
        <>
            <h3 className='title-employee'>Employees' list</h3>
            <div className='table-container'>
                {employeesInfos?.length >= 1 ? 
                    <TableSearch 
                        tableHead={tableHead}
                        tableBody={tableBody}
                        defaultSort={{order: 'asc', orderBy: 'firstName'}}
                    />
                : 
                    <div className='noData-container'>
                        <div>
                            <p className='text-noData'>Please create an employee to see their informations</p>
                        </div>
                        <div>
                            <img className='img-noData' src={NoData} alt='noData'/>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
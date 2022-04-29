import { useState, useEffect } from 'react';
// components

import TableSortBox from '../components/Table';
// custom
import '../custom/pages/employeeList.scss';

// -----------------------------------------------
export default function EmployeeList() {
    const [employeesInfos, setEmployeesInfos] = useState([]);
    const [currentRows, setCurrentRows] = useState([]); //default rows is set to blank array
    const [currentPage, setCurrentPage] = useState(1); // default pagination default is 1
    const [rowsPerPage, setRowsPerPage] = useState(10); //default records per page is 10

    //last page number based on rows per page
    const indexofLastRow = currentPage * rowsPerPage;
    //first page number based on how many rows per page
    const indexOfFirstRow = indexofLastRow - rowsPerPage;

    useEffect( () => {
		let data = JSON.parse(localStorage.getItem('infosEmployee'));
		setEmployeesInfos(data);
	}, []);

    useEffect(() => {
        setCurrentRows(employeesInfos.slice(indexOfFirstRow, indexofLastRow));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, rowsPerPage]);
    
    const totalRows = Math.ceil(employeesInfos.length);
    const paginate = (pageNumber) => setCurrentPage(pageNumber); 

    const rowChange = (e) => {
        setRowsPerPage(e.target.value);
        setCurrentPage(1);
      };

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
                    totalRows={totalRows}
                    rowsPerPage={rowsPerPage}
                    currentPage={currentPage}
                    paginate={paginate}
                    onChange={rowChange}
                />
            : 'Please create an employee to see their informations'}
        </div>
    )
}
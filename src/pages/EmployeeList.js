// components
import { Typography } from '@mui/material';
import TableSortBox from '../components/Table';
// custom
import '../custom/pages/employeeList.scss';

// -----------------------------------------------
export default function EmployeeList() {

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
        <Typography>no data</Typography>
    }


    return (
        <div className='table-container'>
            <TableSortBox 
                title='Current Employee'
                tableHead={tableHead}
                tableBody={tableBody()}
                valueLabelBody={false}
                defaultSort={{order: 'asc', orderBy: 'firstName'}}
            />
        </div>
    )
}
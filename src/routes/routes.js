import { Routes, Route } from 'react-router-dom';
// views
import Home from '../pages/Home';
import EmployeeList from '../pages/EmployeeList';

// -------------------------------

export default function Router() {
    return (
        <Routes>
            <Route path= '/' element={<Home/>}/>
            <Route path= 'employeeList' element={<EmployeeList/>}/>
        </Routes>
    )
}
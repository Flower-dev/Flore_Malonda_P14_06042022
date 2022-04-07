import { useRoutes } from 'react-router-dom';
// views
import Home from '../pages/Home';
import EmployeeList from '../pages/EmployeeList';

// -------------------------------

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <Home/>
        },
        {
            path: 'employeeList',
            element: <EmployeeList/>
        }
    ])
}
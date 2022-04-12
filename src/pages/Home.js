// react
import { Fragment } from 'react';
// components
import CreateEmployee from '../components/CreateEmployee';
// custom
import '../custom/pages/home.scss';

export default function Home() {
    return (
        <Fragment>
            <h2>Create Employee</h2>
            <CreateEmployee/>
        </Fragment>
    )
}
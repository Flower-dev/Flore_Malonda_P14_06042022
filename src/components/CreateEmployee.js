export default function CreateEmployee() {
    return (
        <>
            <form action="#" id="create-employee">

                <label>First Name</label>
                <input type="text" id="first-name" />

                <label>Last Name</label>
                <input type="text" id="last-name" />

                <label>Date of Birth</label>
                <input id="date-of-birth" type="text" />

                <label>Start Date</label>
                <input id="start-date" type="text" />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label>Street</label>
                    <input id="street" type="text" />

                    <label>City</label>
                    <input id="city" type="text" />

                    <label>State</label>
                    <select name="state" id="state"></select>

                    <label>Zip Code</label>
                    <input id="zip-code" type="number" />
                </fieldset>

                <label for="department">Department</label>
                <select name="department" id="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
            </form>
            <button onclick="saveEmployee()">Save</button>
        </>
    )
}
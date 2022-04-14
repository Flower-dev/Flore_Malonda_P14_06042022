import React, { useState } from 'react';
// hooks
import useModal from '../hooks/useModal';

// -----------------------------------------------


export const FormContext = React.createContext({
    form: {}
});

export default function Form({ children, submit = () => {}, initialValues }) {
    const [form, setForm ] = useState (initialValues);
    const { toggle } = useModal();

    const handleFormChange = (event) => {
        // Get the name of the field that caused this change event
        // Get the new value of this field
        const { name, value } = event.target;
    
        // Update state
        // Assign new value to the appropriate form field
        setForm({
          ...form,
          [name]: value
        });
      };
    
      return (
        <form className="Form">
          <FormContext.Provider value={{
            form,
            handleFormChange
          }}>
            {children}
          </FormContext.Provider>
          
          <button className='button-save' onClick={() => submit(toggle)}>Save</button>
        </form>
      );
}
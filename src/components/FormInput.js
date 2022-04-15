import { useContext } from 'react';
import { FormContext } from './Form';
import '../custom/components/input.scss';

export default function FormInput({ type, name, placeholder }) {

    const formContext = useContext(FormContext);
    const { form, handleFormChange } = formContext;

    return  (
        <input 
            className='inputForm' 
            type={type}
            name={name}
            placeholder={placeholder} 
            value={form[name]}   
            onChange={handleFormChange} 
        />
    )
}
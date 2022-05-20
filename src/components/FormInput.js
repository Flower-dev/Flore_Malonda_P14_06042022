import { useState } from 'react';
import '../custom/components/input.scss';

export default function FormInput({ type, name, placeholder, onChange, required }) {

    const [initialValue, setInitialValue] = useState('');

    return  (
        <input 
            className='inputForm' 
            type={type}
            name={name}
            required={required}
            placeholder={placeholder} 
            value={initialValue}   
            onChange={(e) => {
                setInitialValue(e.target.value)
                onChange(e.target.value)
            }} 
        />
    )
}
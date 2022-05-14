// react 
import { useState } from 'react';
// custom
import '../custom/components/select.scss';

export default function Select({ options, initialInputValue, onChange, name }) {

    const [inputValue, setInputValue] = useState(
        initialInputValue ? initialInputValue : ''
    );
	const [open, setOpen] = useState(false);

    return (
		<div className='DropdownMenu' style={{height : open ? 'auto' : '40px'}}>
			<button
				type='button'
				className='DropdownMenu__button'
				onClick={() => setOpen(!open)}
			>
				{inputValue !== '' ? inputValue : `Select a ${name}`}
			</button> 
			<ul className='DropdownMenu__options' >
				{options.map((option) => {
					const optionValue =
					typeof option === 'object' ? option.name : option;
					return (
						<li
							className='DropdownMenu__option'
							key={optionValue}
							onClick={(e) => {
								onChange(optionValue)
								setInputValue(optionValue)
								setOpen(false)
							}}
						>
							{optionValue}
						</li>
					);
				})}
			</ul>
		</div>
    );
}


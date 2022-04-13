// react 
import { useState } from 'react';
// custom
import '../custom/components/select.scss';

export default function Select({ options, id, initialInputValue, onChange }) {

    const [inputValue, setInputValue] = useState(
        initialInputValue ? initialInputValue : ''
    );
   
    const handleClick = (
        clickEvent,
        optionValue,
        updateInputWith,
        setPageSize
    ) => {
        clickEvent.stopPropagation();
    
        const DropdownMenu = document.querySelector(`.DropdownMenu--${id}`);
    
        if (DropdownMenu.hasAttribute('open')) {
          DropdownMenu.removeAttribute('open');
        } else {
          DropdownMenu.setAttribute('open', '');
        }
    
        if (optionValue) {
          updateInputWith(optionValue);
        }
        if (setPageSize) {
          setPageSize(optionValue);
        }
    };

    return (
        <>
			<div className={`DropdownMenu DropdownMenu--${id}`}>
				<button
					type='button'
					className='DropdownMenu__button'
					onClick={handleClick}
				>
					{inputValue !== '' ? inputValue : `Click to select a ${id}`}
				</button>
				<ul className='DropdownMenu__options'>
					{options.map((option) => {
						const optionValue =
						typeof option === 'object' ? option.name : option;
						return (
						<li
							className='DropdownMenu__option'
							key={optionValue}
							onClick={(e) =>
							handleClick(e, optionValue, setInputValue, onChange)
							}
						>
							{optionValue}
						</li>
						);
					})}
				</ul>
			</div>
          <input type='hidden' id={id} value={inputValue} data-testid={id}  />
        </>
    );
}


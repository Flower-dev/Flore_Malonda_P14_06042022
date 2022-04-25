import React from 'react';
// components
import InputForm from './FormInput';
// custom 
import '../custom/components/table.scss';
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";


// ---------------------------------
export default function TableSortBox({ tableHead, onChange, data, totalRows, rowsPerPage, paginate, currentPage }) {
	const columnHeaders = [];
	console.log(data)

	// push create column headers and row fields based on tableHead object
	for (const { header} of tableHead) {
		columnHeaders.push(header)
	}

	//empty array of pages
    const numberOfPages = [];

    //loop over the number of pages that are needed depending on rows per page
    for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    	numberOfPages.push(i);
    }

	return (
		<>
			<div className='search-container'>
				<InputForm
					placeholder='Search'
					type='search'
					name='search' 
					onKeyUp={onChange}
				/>
			</div>
			
			<table>
				<thead>
					<tr>
						{columnHeaders.map((header) => {
							return (
							<th align='center' key={header}>
								{header}
							</th>
							);
						})}
					</tr>
				</thead>
				<tbody>
					{data.map((rows) => {
						return (
							<tr className='row-data' key={rows.firstName}>
								<td align='center'>{rows.firstName}</td>
								<td align='center'>{rows.lastName}</td>
								<td align='center'>{rows.dateOfBirth}</td>
								<td align='center'>{rows.startDate}</td>
								<td align='center'>{rows.state}</td>
								<td align='center'>{rows.city}</td>
								<td align='center'>{rows.street}</td>
								<td align='center'>{rows.zipCode}</td>
								<td align='center'>{rows.department}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<div className='container'>
				<div className='select-container'>
					<div className='select-options'>
					<label htmlFor='rows-per-page' className='page-label'>
						Rows per Page:
					</label>
					<select
						className='page-select'
						name='rows'
						id='rowNum-select'
						onChange={onChange}>
						<option value='5'>5</option>
						<option value='10'>10</option>
						<option value='20'>20</option>
						<option value='50'>50</option>
					</select>
					</div>
				</div>
				<div className='pagination-directions'>
					<button
						className='direction-left'
						onClick={() => paginate(currentPage - 1)}
						disabled={numberOfPages.at(0) === currentPage}
					>
						<FontAwesomeIcon icon={faAngleLeft} className='table-icons'/>
					</button>
					<button className='current-center'>{currentPage}</button>
					<button
						className='direction-right'
						onClick={() => paginate(currentPage + 1)}
						disabled={numberOfPages.at(-1) === currentPage}
					>
						<FontAwesomeIcon icon={faAngleRight} className='table-icons'/>
					</button>
				</div>
     		</div>	
		</>
	)
}

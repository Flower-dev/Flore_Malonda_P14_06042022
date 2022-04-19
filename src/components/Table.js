import React from 'react';

export default function TableSortBox({ tableHead, onChange, data }) {
	const columnHeaders = [];
  	const rowFields = [];

	// push create column headers and row fields based on tableHead object
	for (const { header, field } of tableHead) {
		columnHeaders.push(header);
		rowFields.push(field);
	}

	return (
		<>
			<div className='search-container'>
				<input
				className='search-input'
				type='search'
				placeholder='Search'
				onKeyUp={onChange}></input>
			</div>
			{data && (
				<table>
					<thead>
						<tr>
							{columnHeaders.map((header) => {
								return (
								<th key={header}>
									{header}
								</th>
								);
							})}
						</tr>
					</thead>
					<tbody>
						{data.map((rows, i) => {
							const {
								city,
								birthDate,
								department,
								firstName,
								lastName,
								startDay,
								state,
								street,
								zipCode,
							} = rows;
							return (
								<tr className='row-data' key={rows.i}>
								<td>{city}</td>
								<td>{birthDate}</td>
								<td>{department}</td>
								<td>{firstName}</td>
								<td>{lastName}</td>
								<td>{startDay}</td>
								<td>{state}</td>
								<td>{street}</td>
								<td>{zipCode}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
      		)}
		</>
	)
}
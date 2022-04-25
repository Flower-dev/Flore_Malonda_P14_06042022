import React from 'react';
// components
import InputForm from './FormInput';
// custom 
import '../custom/components/table.scss';


// ---------------------------------
export default function TableSortBox({ tableHead, onChange, data }) {
	const columnHeaders = [];
  	const rowFields = [];
	console.log(data)

	// push create column headers and row fields based on tableHead object
	for (const { header, field } of tableHead) {
		columnHeaders.push(header);
		rowFields.push(field);
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
						{data.map((rows) => {
							const {
								firstName,
								lastName,
								birthOfDate,
								startOfDay,
								state,
								city,
								street,
								zipCode,
								department,
							} = rows;
							return (
								<tr className='row-data' key={rows.firstName}>
									<td>{firstName}</td>
									<td>{lastName}</td>
									<td>{birthOfDate}</td>
									<td>{startOfDay}</td>
									<td>{state}</td>
									<td>{city}</td>
									<td>{street}</td>
									<td>{zipCode}</td>
									<td>{department}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
      		)}
		</>
	)
}



// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

// import "../pages/styles/paginationStyle.css";

// const angleLeft = <FontAwesomeIcon icon={faAngleLeft} />;
// const angleRight = <FontAwesomeIcon icon={faAngleRight} />;

// const Pagination = ({
//   totalRows,
//   rowsPerPage,
//   paginate,
//   currentPage,
//   onChange,
// }) => {
//   //empty array of pages
//   const numberOfPages = [];

//   //loop over the number of pages that are needed depending on rows per page
//   for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
//     numberOfPages.push(i);
//   }

//   return (
//     <div className='container'>
//       <div className='select-container'>
//         <p className='display-text'>
//           Showing page <strong> {currentPage}</strong> of{" "}
//           <strong>{numberOfPages.at(-1)}</strong>
//         </p>
//         <div className='select-options'>
//           <label htmlFor='rows-per-page' className='page-label'>
//             Rows per Page:
//           </label>
//           <select
//             className='page-select'
//             name='rows'
//             id='rowNum-select'
//             onChange={onChange}>
//             <option value='10'>10</option>
//             <option value='5'>5</option>
//             <option value='20'>20</option>
//             <option value='50'>50</option>
//           </select>
//         </div>
//       </div>
//       <div className='pagination-directions'>
//         <button
//           className='direction-left'
//           onClick={() => paginate(currentPage - 1)}
//           disabled={numberOfPages.at(0) === currentPage}>
//           {angleLeft}
//         </button>
//         <button className='current-center'>{currentPage}</button>
//         <button
//           className='direction-right'
//           onClick={() => paginate(currentPage + 1)}
//           disabled={numberOfPages.at(-1) === currentPage}>
//           {angleRight}
//         </button>
//       </div>
//     </div>
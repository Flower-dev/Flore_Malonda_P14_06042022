import React, { useState } from 'react';
import { styled } from '@mui/system';
import TablePaginationUnstyled, {
	tablePaginationUnstyledClasses as classes,
} from '@mui/base/TablePaginationUnstyled';
import '../custom/components/tableSearch.scss';


const Root = styled('div')(
	() => `
	table {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    	'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    	sans-serif;
		border-collapse: collapse;
		width: 100%;
	}

	td,
	th {
		text-align: center;
		padding: 6px;
		font-size: 11px;
	}

	th {
		background-color: #012326;
		color: white;
		font-size: 12px;
	}
	`,
);

const CustomTablePagination = styled(TablePaginationUnstyled)(
	() => `
	& .${classes.spacer} {
		display: none;
	}

	& .${classes.toolbar}  {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 10px;

		@media (min-width: 768px) {
			flex-direction: row;
			align-items: center;
		}
	}

	& .${classes.selectLabel} {
		margin: 0;
	}

	& .${classes.select}{
		padding: 2px;
		border: 1px solid '#E0E3E7';
		border-radius: 50px;
		background-color: transparent;

		&:hover {
			background-color: '#F3F6F9';
		}

		&:focus {
			outline: 1px solid '#A5D8FF';
		}
	}

	& .${classes.displayedRows} {
		margin: 0;

		@media (min-width: 768px) {
			margin-left: auto;
		}
	}

	& .${classes.actions} {
		padding: 2px;
		border: 1px solid '#E0E3E7';
		border-radius: 50px;
		text-align: center;
	}

	& .${classes.actions} > button {
		margin: 0 8px;
		border: transparent;
		border-radius: 2px;
		background-color: transparent;

		&:hover {
			background-color: '#F3F6F9';
		}

		&:focus {
			outline: 1px solid '#A5D8FF';
		}
	}
	`,
);

export default function TableSearch({
	tableHead,
	tableBody,
}) {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [rows, setRows] = useState(tableBody);
	const [searched, setSearched] = useState('');

	const requestSearch = (searchedVal) => {
		const filteredRows = tableBody?.filter((row) => {
			return row.firstName.toLowerCase().includes(searchedVal.toLowerCase());
		});
		setSearched(searchedVal);
		setRows(filteredRows);
	};

	// const cancelSearch = () => {
	// 	setSearched("");
	// 	requestSearch(searched);
	// };

	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

	const handleChangePage = (e, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};



	return (
		<Root sx={{ maxWidth: '100%' }}>
			<input
				className='search-table'
				placeholder='Search ...'
				value={searched}
				onChange={(searchVal) => requestSearch(searchVal.target.value)}
				//onCancelSearch={() => cancelSearch()}
        	/>
			<table aria-label="custom pagination table">
				<thead>
					<tr>
						{tableHead.map((headCell) => {
							return (
								<th key={headCell.id} align='center'>{headCell.label}</th>
							)
						})}
					</tr>
				</thead>
				{/* <tbody>
            {rows
			.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
			.map((row, rowId) => {
              return (
                <tr key={rowId}>
                  {tableHead.map((header, index) => {
					  return(
                      <td key={index}>
                          <span>{row[header]}</span>                      
                      </td>)

                  })}
                </tr>
              );
            })}
			{emptyRows > 0 && (
				<tr style={{ height: 34 * emptyRows }}>
					<td colSpan={3} />
				</tr>
			)}
          </tbody> */}
				<tbody>
					{rows
						.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
						.map((row, rowId) => (
							<tr key={rowId}>
								<td align="center">
									{row.firstName}
								</td>
								<td align="center">
									{row.lastName}
								</td>
								<td align="center">
									{new Date(row.dateOfBirth).toDateString()}
								</td>
								<td align="center">
									{new Date(row.startDate).toDateString()}
								</td>
								<td align="center">
									{row.state}
								</td>
								<td align="center">
									{row.city}
								</td>
								<td align="center">
									{row.street}
								</td>
								<td align="center">
									{row.zipCode}
								</td>
								<td align="center">
									{row.department}
								</td>
						  	</tr>
						)
					)}

					{emptyRows > 0 && (
						<tr style={{ height: 34 * emptyRows }}>
							<td colSpan={3} />
						</tr>
					)}
				</tbody>
				<tfoot>
					<tr>
						<CustomTablePagination
							rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
							count={tableBody.length}
							rowsPerPage={rowsPerPage}
							page={page}
							componentsProps={{
								select: {
									'aria-label': 'rows per page',
								},
								actions: {
									showFirstButton: true,
									showLastButton: true,
								},
							}}
							onPageChange={handleChangePage}
							onRowsPerPageChange={handleChangeRowsPerPage}
						/>
					</tr>
				</tfoot>
			</table>
		</Root>
	);
}

import React, { useState } from 'react';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import TableSortLabel from '@mui/material/TableSortLabel';
import TablePaginationUnstyled, {
	tablePaginationUnstyledClasses as classes,
} from '@mui/base/TablePaginationUnstyled';
import { visuallyHidden } from '@mui/utils';
import '../custom/components/tableSearch.scss';


// ------------------------------------- Style -----------------------------------------------------

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
		background-color: #F0F0F2;
		color: black;
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


// -----------------------------------------------------

export default function TableSearch({ tableHead, tableBody }) {

	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [rows, setRows] = useState(tableBody);
	const [searched, setSearched] = useState('');
	const [order, setOrder] = React.useState('asc');
	const [orderBy, setOrderBy] = React.useState('firstName');

	// Seach 
	const requestSearch = (searchedVal) => {
		const filteredRows = tableBody?.filter((row) => {
			return row.firstName.toLowerCase().includes(searchedVal.toLowerCase()) || 
				   row.lastName.toLowerCase().includes(searchedVal.toLowerCase()) ||
				   row.department.toLowerCase().includes(searchedVal.toLowerCase()) ;
		});
		setSearched(searchedVal);
		setRows(filteredRows);
	};

	// const cancelSearch = () => {
	// 	setSearched("");
	// 	requestSearch(searched);
	// };

	// Pagination
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

	const handleChangePage = (e, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	// filter

	function descendingComparator(a, b, orderBy) {
		if (b[orderBy] < a[orderBy]) {
		  return -1;
		}
		if (b[orderBy] > a[orderBy]) {
		  return 1;
		}
		return 0;
	}
	  
	function getComparator(order, orderBy) {
		return order === 'desc'
		  ? (a, b) => descendingComparator(a, b, orderBy)
		  : (a, b) => -descendingComparator(a, b, orderBy);
	}
	  
	// This method is created for cross-browser compatibility, if you don't
	// need to support IE11, you can use Array.prototype.sort() directly
	function stableSort(array, comparator) {
		const stabilizedThis = array.map((el, index) => [el, index]);
		stabilizedThis.sort((a, b) => {
		  const order = comparator(a[0], b[0]);
		  if (order !== 0) {
			return order;
		  }
		  return a[1] - b[1];
		});
		return stabilizedThis.map((el) => el[0]);
	}
	
	  
	function EnhancedTableHead( props ) {
		const { order, orderBy, onRequestSort } =
		  props;
		const createSortHandler = (property) => (event) => {
		  onRequestSort(event, property);
		};

		return (
			<thead>
				<tr>
					{tableHead.map((headCell) => (
						<th
							key={headCell.id}
							align='center'
							padding={headCell.disablePadding ? 'none' : 'normal'}
							sortDirection={orderBy === headCell.id ? order : false}
						>
							<TableSortLabel
								active={orderBy === headCell.id}
								direction={orderBy === headCell.id ? order : 'asc'}
								onClick={createSortHandler(headCell.id)}
							>
								{headCell.label}
								{orderBy === headCell.id ? (
									<Box component="span" sx={visuallyHidden}>
									{order === 'desc' ? 'sorted descending' : 'sorted ascending'}
									</Box>
								) : null}
							</TableSortLabel>
						</th>
					))}
				</tr>
			</thead>
		)
	}
	
	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
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
			<table>
				<EnhancedTableHead
					order={order}
					orderBy={orderBy}
					onRequestSort={handleRequestSort}
					rowCount={rows.length}
				/>
				<tbody>
					{stableSort(rows, getComparator(order, orderBy))
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

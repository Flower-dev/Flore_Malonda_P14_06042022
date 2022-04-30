// import React, {useState} from 'react';
// // custom 
// import '../custom/components/table.scss';
// // fontawesome
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";


// // ---------------------------------
// export default function TableSortBox({ tableHead, onChangePage, data, totalRows, rowsPerPage, paginate, currentPage, onChange }) {
// 	const [filterSearch, setFilterSearch ] = useState('');        
// 	const columnHeaders = [];
// 	console.log(data)

// 	// push create column headers and row fields based on tableHead object
// 	for (const { header} of tableHead) {
// 		columnHeaders.push(header)
// 	}

//     const numberOfPages = [];
//     for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
//     	numberOfPages.push(i);
//     }



// 	return (
// 		<>
// 			<div className='search-container'>
// 				<label className='search-label'>Search</label>
// 				<input
// 				className='search-input'
// 				type='search'
// 				onKeyUp={onChange}></input>
// 			</div>
// 			{data && 
// 				<table>
// 					<thead>
// 						<tr>
// 							{columnHeaders.map((header) => {
// 								return (
// 								<th align='center' key={header}>
// 									{header}
// 								</th>
// 								);
// 							})}
// 						</tr>
// 					</thead>
// 					<tbody>
// 						{data.map((rows) => {
// 							return (
// 								<tr className='row-data' key={rows.firstName}>
// 									<td align='center'>{rows.firstName}</td>
// 									<td align='center'>{rows.lastName}</td>
// 									<td align='center'>{rows.dateOfBirth}</td>
// 									<td align='center'>{rows.startDate}</td>
// 									<td align='center'>{rows.state}</td>
// 									<td align='center'>{rows.city}</td>
// 									<td align='center'>{rows.street}</td>
// 									<td align='center'>{rows.zipCode}</td>
// 									<td align='center'>{rows.department}</td>
// 								</tr>
// 							);
// 						})}
// 					</tbody>
// 				</table>
// 			}
// 			<div className='container'>
// 				<div className='select-container'>
// 					<div className='select-options'>
// 					<label htmlFor='rows-per-page' className='page-label'>
// 						Rows per Page:
// 					</label>
// 					<select
// 						className='page-select'
// 						name='rows'
// 						id='rowNum-select'
// 						onChange={onChangePage}>
// 						<option value='5'>5</option>
// 						<option value='10'>10</option>
// 						<option value='20'>20</option>
// 						<option value='50'>50</option>
// 					</select>
// 					</div>
// 				</div>
// 				<div className='pagination-directions'>
// 					<button
// 						className='direction-left'
// 						onClick={() => paginate(currentPage - 1)}
// 						disabled={numberOfPages.at(0) === currentPage}
// 					>
// 						<FontAwesomeIcon icon={faAngleLeft} className='table-icons'/>
// 					</button>
// 					<button className='current-center'>{currentPage}</button>
// 					<button
// 						className='direction-right'
// 						onClick={() => paginate(currentPage + 1)}
// 						disabled={numberOfPages.at(-1) === currentPage}
// 					>
// 						<FontAwesomeIcon icon={faAngleRight} className='table-icons'/>
// 					</button>
// 				</div>
//      		</div>	
// 		</>
// 	)
// }

import { useState } from 'react';
// utils
import PropTypes from 'prop-types';
import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import searchFill from '@iconify/icons-eva/search-fill';
// material
import {
	Box,
	Card,
	CardHeader,
	Collapse,
	Grid,
	IconButton,
	InputAdornment,
	OutlinedInput,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
	TableSortLabel,
	useMediaQuery
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


// -------------------------------------------

Row.propTypes = {
	tableHead: PropTypes.array,
	tableBody: PropTypes.array,
	valueLabelBody: PropTypes.bool,
	row: PropTypes.object,
	collapsible: PropTypes.bool
};

// -------------------------------------------

function Row({ tableHead, tableBody, valueLabelBody, row, collapsible }) {
	const [open, setOpen] = useState(false);

	return (
		<>
			<TableRow hover tabIndex={-1}>
				{collapsible && (
					<TableCell>
						<IconButton size='small' onClick={() => setOpen(!open)}>
							{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
						</IconButton>
					</TableCell>
				)}

				{tableHead.map((col, index) => (
					<TableCell align={col.alignBody ? col.alignBody : 'left'} key={index}>
						{valueLabelBody
							? row[col.id]
							: tableBody.find((element) => element.value === row).label[col.id]}
					</TableCell>
				))}
			</TableRow>

			{collapsible && (
				<TableRow>
					<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
						<Collapse in={open} timeout='auto' unmountOnExit>
							<Box sx={{ margin: 1 }}>
								<Table size='small' aria-label='purchases'>
									<TableHead>
										<TableRow>
											{row.tableHeadCollapsible.map((column) => (
												<TableCell key={column.id} align={column.align}>
													{column.label}
												</TableCell>
											))}
										</TableRow>
									</TableHead>
									<TableBody>
										{row.tableBodyCollapsible.map((collapsibleRow, index) => (
											<TableRow key={index}>
												{row.tableHeadCollapsible.map((column) => (
													<TableCell key={column.id} align={column.align}>
														{collapsibleRow[column.id]}
													</TableCell>
												))}
											</TableRow>
										))}
									</TableBody>
								</Table>
							</Box>
						</Collapse>
					</TableCell>
				</TableRow>
			)}
		</>
	);
}

// -------------------------------------------

TableSortBox.propTypes = {
	title: PropTypes.string,
	subheader: PropTypes.string,
	tableHead: PropTypes.array,
	tableBody: PropTypes.array,
	valueLabelBody: PropTypes.bool,
	defaultSort: PropTypes.exact({
		orderBy: PropTypes.string,
		order: PropTypes.string
	}),
	tableAction: PropTypes.node,
	customRowsPerPage: PropTypes.number,
	collapsible: PropTypes.bool
};

TableSortBox.defaultProps = {
	tableHead: [],
	tableBody: [],
	valueLabelBody: true,
	defaultSort: { order: 'asc', orderBy: null }
};

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

function applySortFilter(array, comparator, query) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	if (query) {
		return filter(array, (element) =>
			Object.values(element).some((value) =>
				typeof value === 'number'
					? value.toString().indexOf(query) !== -1
					: value !== null &&
					  value !== undefined 
			)
		);
	}
	return stabilizedThis.map((el) => el[0]);
}

// ----------------------------------------------------------------------

export default function TableSortBox({
	title,
	subheader,
	tableHead,
	tableBody,
	valueLabelBody,
	defaultSort,
	tableAction,
	customRowsPerPage,
	collapsible
}) {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const [order, setOrder] = useState(defaultSort.order);
	const [orderBy, setOrderBy] = useState(defaultSort.orderBy);
	const [filterSearch, setFilterSearch] = useState('');
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(customRowsPerPage ? customRowsPerPage : 10);

	const tableBodyData = valueLabelBody ? tableBody : tableBody.map((element) => element.value);

	const filteredBody = applySortFilter(
		tableBodyData,
		getComparator(order, orderBy),
		filterSearch
	);

	const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableBody.length) : 0;


	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const createSortHandler = (property) => (event) => {
		handleRequestSort(event, property);
	};

	const handleFilterBySearch = (event) => {
		setFilterSearch(event.target.value);
	};

	const searchBar = (
		<OutlinedInput
			fullWidth={isMobile}
			value={filterSearch}
			onChange={handleFilterBySearch}
			placeholder='Rechercher...'
			startAdornment={
				<InputAdornment position='start'>
					<Box component={Icon} icon={searchFill} sx={{ color: 'text.disabled' }} />
				</InputAdornment>
			}
		/>
	);

	return (
		<Card>
			<CardHeader
				title={title}
				subheader={subheader}
				sx={{ mb: 1 }}
				action={!tableAction && searchBar}
			/>
			{tableAction && (
				<Grid container spacing={1} sx={{ padding: theme.spacing(0, 2) }}>
					<Grid item xs={12} sm={6}>
						{searchBar}
					</Grid>
					<Grid container item xs={12} sm={6} justifyContent='flex-end'>
						{tableAction}
					</Grid>
				</Grid>
			)}
			
			<TableContainer sx={{ mt: 3 }}>
				<Table>
					<TableHead>
						<TableRow>
							{collapsible && <TableCell />}
							{tableHead.map((headCell) => (
								<TableCell
									key={headCell.id}
									align={headCell.alignHead ? headCell.alignHead : 'left'}
									sortDirection={orderBy === headCell.id ? order : false}
									style={{
										minWidth: headCell.minWidth
									}}>
									<TableSortLabel
										hideSortIcon
										active={orderBy === headCell.id}
										direction={orderBy === headCell.id ? order : 'asc'}
										onClick={createSortHandler(headCell.id)}>
										{headCell.label}
										{orderBy === headCell.id ? (
											<Box sx={{ ...visuallyHidden }}>
												{order === 'desc'
													? 'sorted descending'
													: 'sorted ascending'}
											</Box>
										) : null}
									</TableSortLabel>
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{filteredBody
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row, indexRow) => (
								<Row
									key={indexRow}
									tableHead={tableHead}
									tableBody={tableBody}
									valueLabelBody={valueLabelBody}
									row={row}
									collapsible={collapsible}
								/>
							))}
						{emptyRows > 0 && (
							<TableRow style={{ height: 53 * emptyRows }}>
								<TableCell colSpan={6} />
							</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer>

			<TablePagination
				labelRowsPerPage='Lignes par page :'
				rowsPerPageOptions={[5, 10, 20, 50, { label: 'toutes', value: tableBody.length }]}
				component='div'
				count={tableBody.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Card>
	);
}

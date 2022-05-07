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
	Grid,
	InputAdornment,
	OutlinedInput,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TableSortLabel,
	useMediaQuery
} from '@mui/material';
import TablePaginationUnstyled, {
	tablePaginationUnstyledClasses as classes,
} from '@mui/base/TablePaginationUnstyled';
import { visuallyHidden } from '@mui/utils';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
// components
import SearchNotFound from './SearchNotFound';

// -------------------------------------------

Row.propTypes = {
	tableHead: PropTypes.array,
	tableBody: PropTypes.array,
	valueLabelBody: PropTypes.bool,
	row: PropTypes.object
};

// -------------------------------------------

const blue = {
	200: '#A5D8FF',
	400: '#3399FF',
};
  
const grey = {
	50: '#F3F6F9',
	100: '#E7EBF0',
	200: '#E0E3E7',
	300: '#CDD2D7',
	400: '#B2BAC2',
	500: '#A0AAB4',
	600: '#6F7E8C',
	700: '#3E5060',
	800: '#2D3843',
	900: '#1A2027',
};


const CustomTablePagination = styled(TablePaginationUnstyled)(
	({ theme }) => `
	& .${classes.spacer} {
	  display: none;
	}
  
	& .${classes.toolbar}  {
	  margin-left: 10px;	
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
	  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
	  border-radius: 50px;
	  background-color: transparent;
  
	  &:hover {
		background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
	  }
  
	  &:focus {
		outline: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
	  }
	}
  
	& .${classes.displayedRows} {
	  margin: 0;
	  padding: 20px;
	  @media (min-width: 768px) {
		margin-left: auto;
	  }
	}
  
	& .${classes.actions} {
	  padding: 0px;
	  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
	  border-radius: 50px;
	  text-align: center;
	}
  
	& .${classes.actions} > button {
	  margin: 0 8px;
	  border: transparent;
	  border-radius: 2px;
	  background-color: transparent;
  
	  &:hover {
		background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
	  }
  
	  &:focus {
		outline: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
	  }
	}
	`,
  );

  // -------------------------------------------

function Row({ tableHead, tableBody, valueLabelBody, row }) {

	return (
		<TableRow hover tabIndex={-1}>
			{tableHead.map((col, index) => (
				<TableCell align={col.alignBody ? col.alignBody : 'left'} key={index}>
					{valueLabelBody
						? row[col.id]
						: tableBody.find((element) => element.value === row).label[col.id]}
				</TableCell>
			))}
		</TableRow>
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
}) {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const [order, setOrder] = useState(defaultSort.order);
	const [orderBy, setOrderBy] = useState(defaultSort.orderBy);
	const [filterSearch, setFilterSearch] = useState('');
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(customRowsPerPage ? customRowsPerPage : 10);

	const tableBodyData = valueLabelBody ? tableBody : tableBody.map((e) => e.value);

	const filteredBody = applySortFilter(
		tableBodyData,
		getComparator(order, orderBy),
		filterSearch
	);

	const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableBody.length) : 0;

	const isSearchNotFound = filteredBody.length === 0;

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
					<Box component={Icon} icon={searchFill} />
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
				action={searchBar}
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
								/>
							))}
						{emptyRows > 0 && (
							<TableRow style={{ height: 53 * emptyRows }}>
								<TableCell colSpan={6} />
							</TableRow>
						)}
					</TableBody>
					{isSearchNotFound && (
						<TableBody>
							<TableRow>
								<TableCell align='center' colSpan={6} sx={{ py: 3 }}>
									<SearchNotFound searchQuery={filterSearch} />
								</TableCell>
							</TableRow>
						</TableBody>
					)}
				</Table>
			</TableContainer>
			
			<CustomTablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={6}
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
		</Card>
	);
}
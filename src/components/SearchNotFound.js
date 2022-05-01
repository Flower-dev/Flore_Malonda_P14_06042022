import { Paper, Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function SearchNotFound({ searchQuery = '', ...other }) {
	return searchQuery ? (
		<Paper {...other}>
			<Typography gutterBottom align='center' variant='subtitle1'>
                No results
			</Typography>
			<Typography variant='body2' align='center'>
                No result for &nbsp;
				<strong>&quot;{searchQuery}&quot;</strong>. 
			</Typography>
		</Paper>
	) : (
		<Typography variant='body2'>Type your search</Typography>
	);
}
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { visuallyHidden } from '@mui/utils';
import { Grid, InputAdornment } from '@mui/material';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import NearMeIcon from '@mui/icons-material/NearMe';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Card, FormControlLabel, FormGroup } from '@mui/material';

import { ReactComponent as SearchSvg } from '../../../assets/search.svg';
import { ReactComponent as StateSvg } from '../../../assets/state.svg';
// import 'react-date-range/dist/styles.css'; // main css file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import { DateRange } from 'react-date-range';
// import { DateRangePicker } from 'rsuite';

import './Table.scss';

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

function EnhancedTableHead(props) {
  const { columns, order, orderBy, onRequestSort, tableController, handleTableControllerChange } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow style={{ background: '#F0F0F0' }}>
        {/* <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell> */}
        {columns.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={'none'}
            sortDirection={
              tableController.sort.orderBy === headCell.id ? tableController.sort.order : false
            }>
            <TableSortLabel
              active={tableController.sort.orderBy === headCell.id}
              direction={
                tableController.sort.orderBy === headCell.id ? tableController.sort.order : 'asc'
              }
              className="table__header-homemarket"
              onClick={createSortHandler(headCell.id)}>
              {headCell.label}
              {tableController.sort.orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {tableController.sort.order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
}

// EnhancedTableHead.propTypes = {
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

const EnhancedTableToolbar = (props) => {
  const { title, tableController, handleTableControllerChange, marketplace = false } = props;

  const [age, setAge] = React.useState('');
  const [age1, setAge1] = React.useState('');
  const [age2, setAge2] = React.useState('');
  const [age3, setAge3] = React.useState('');

  const [expiresValue, setExpiresValue] = React.useState('12/12/2021');
  const [state, setState] = React.useState([
    {
      startDate: null,
      endDate: null,
      key: 'selection'
    }
  ]);

  const handleChange = (event) => {
    console.log(event.target);
    setAge(event.target.value);
  };
  const handleChange1 = (event) => {
    setAge(event.target.value);
  };
  const handleChange2 = (event) => {
    setAge(event.target.value);
  };
  const handleChange3 = (event) => {
    setAge(event.target.value);
  };

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between'
      }}>
      <Typography
        sx={{
          fontFamily: 'Work Sans',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '24px',
          lineHeight: '28px',
          color: '#222834'
        }}
        variant="h6"
        id="tableTitle"
        component="div">
        {title}
      </Typography>

      {!marketplace ? (
        <Box style={{ display: 'flex', flexFlow: 'row wrap' }}>
          {/* <FormControl sx={{ m: 2, minWidth: 130 }} size="small">
          <InputLabel id="demo-select-small">
            <Box sx={{ display: "flex", gap: 1 }}>
              <FilterListIcon />
              Sort By
            </Box>
          </InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={tableController.filters.sortBy}
            label={<Box sx={{ display: "flex", gap: 1 }}>
              <FilterListIcon />
              Sort By
            </Box>}
            onChange={(e) => handleTableControllerChange('filters', { sortBy: e.target.value })}
          >
            <MenuItem value={'Florida'}>Florida</MenuItem>
            <MenuItem value={'New York'}>New York</MenuItem>
            <MenuItem value={'Texas'}>Texas</MenuItem>
            <MenuItem value={'Virginia'}>Virginia</MenuItem>
          </Select>
        </FormControl> */}
          <FormControl sx={{ m: 2, minWidth: 120 }} size="small">
            <Select
              className="state-dropdown"
              labelId="demo-select-small"
              id="demo-select-small"
              value={tableController.filters.state}
              displayEmpty
              onChange={(e) =>
                handleTableControllerChange('filters', {
                  state: e.target.value
                })
              }>
              <MenuItem value="" sx={{ display: 'none' }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <StateSvg style={{ marginTop: '2px' }} />
                  State
                </Box>
              </MenuItem>
              <TextField
                className="table__filter-search"
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchSvg className="placeholder__icon" />
                    </InputAdornment>
                  )
                }}
              />
              <Grid container className="table__filter__container-actions">
                <Grid className="table__filter-actions">Select all</Grid>
                <Grid className="table__filter-actions">Reset</Grid>
              </Grid>
              <FormGroup className="table__filter__options">
                <FormControlLabel value={'Florida'} control={<Checkbox />} label="Florida" />
                <FormControlLabel value={'New York'} control={<Checkbox />} label="New York" />
                <FormControlLabel value={'Texas'} control={<Checkbox />} label="Texas" />
                <FormControlLabel value={'Virginia'} control={<Checkbox />} label="Virginia" />
              </FormGroup>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 2, minWidth: 120 }} size="small">
            <Select
              className="state-dropdown"
              labelId="demo-select-small"
              id="demo-select-small"
              value={tableController.filters.state}
              displayEmpty
              onChange={(e) =>
                handleTableControllerChange('filters', {
                  state: e.target.value
                })
              }>
              <MenuItem value="" sx={{ display: 'none' }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <StateSvg style={{ marginTop: '2px' }} />
                  District
                </Box>
              </MenuItem>
              <TextField
                className="table__filter-search"
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchSvg className="placeholder__icon" />
                    </InputAdornment>
                  )
                }}
              />
              <Grid container className="table__filter__container-actions">
                <Grid className="table__filter-actions">Select all</Grid>
                <Grid className="table__filter-actions">Reset</Grid>
              </Grid>
              <FormGroup className="table__filter__options">
                <FormControlLabel value={'Florida'} control={<Checkbox />} label="Florida" />
                <FormControlLabel value={'New York'} control={<Checkbox />} label="New York" />
                <FormControlLabel value={'Texas'} control={<Checkbox />} label="Texas" />
                <FormControlLabel value={'Virginia'} control={<Checkbox />} label="Virginia" />
              </FormGroup>
            </Select>
          </FormControl>
          {/* <DateRange
          editableDateInputs={false}
          onChange={item => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
        /> */}
          <span className="expires-filter-label">Expires:</span>
          {/* <TextField
            sx={{ m: 2, minWidth: 130 }}
            id="outlined-basic"
            variant="outlined"
            size="small"
          /> */}
  <div className='expires__datepicker'>
  <LocalizationProvider dateAdapter={AdapterDateFns} >
            <DatePicker
            size='small'
              value={expiresValue}
              onChange={(newValue) => {
                setExpiresValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
  </div>
          
        </Box>
      ) : null}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
};

export default function EnhancedTable({
  title,
  rows,
  columns,
  totalCount,
  tableController,
  handleTableControllerChange,
  marketplace = false
}) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleOptionClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * tableController.pagination.rowsPerPage - rows.length) : 0;

  return (
    <Box component="main" className="main__body">
      <Card className="card">
        {marketplace ? (
          <EnhancedTableToolbar
            title={title}
            numSelected={selected.length}
            marketplace={true}
            //tableController={tableController}
            //handleTableControllerChange={handleTableControllerChange}
          />
        ) : (
          <EnhancedTableToolbar
            title={title}
            numSelected={selected.length}
            tableController={tableController}
            handleTableControllerChange={handleTableControllerChange}
          />
        )}

        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={'medium'}>
            <EnhancedTableHead
              columns={columns}
              numSelected={selected.length}
              order={tableController.sort.order}
              orderBy={tableController.sort.orderBy}
              tableController={tableController}
              handleTableControllerChange={handleTableControllerChange}
              onRequestSort={(e, p) => {
                const order =
                  tableController.sort.orderBy === p && tableController.sort.order === 'asc'
                    ? 'desc'
                    : 'asc';
                handleTableControllerChange('sort', { orderBy: p, order });
              }}
              rowCount={rows.length}
            />

            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(
                  page * tableController.pagination.rowsPerPage,
                  page * tableController.pagination.rowsPerPage +
                    tableController.pagination.rowsPerPage
                )
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}>
                      <TableCell align="left" padding={'none'}>
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId
                          }}
                        />
                      </TableCell>

                      {columns.map((m, i) => {
                        if (i === 0) return null;
                        return (
                          <TableCell
                            align="left"
                            padding={'none'}
                            className="table__body-homemarket">
                            {row[m.id]}
                          </TableCell>
                        );
                      })}

                      <TableCell align="left" padding={'none'}>
                        {marketplace ? (
                          <IconButton
                            color="inherit"
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            /* onClick={(e) => {
                            e.stopPropagation();
                            handleOptionClick(e);
                          }}*/
                          >
                            <MoreVertIcon />
                          </IconButton>
                        ) : (
                          <IconButton
                            color="inherit"
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOptionClick(e);
                            }}>
                            <MoreVertIcon />
                          </IconButton>
                        )}

                        <Menu
                          className="tablerow__menu"
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={(e) => {
                            e.stopPropagation();
                            handleClose(e);
                          }}
                          MenuListProps={{
                            'aria-labelledby': 'basic-button'
                          }}>
                          <MenuItem
                            onClick={(e) => {
                              e.stopPropagation();
                              handleClose(e);
                            }}>
                            View Details
                          </MenuItem>
                          <MenuItem
                            onClick={(e) => {
                              e.stopPropagation();
                              handleClose(e);
                            }}>
                            Order Inventory
                          </MenuItem>
                          <MenuItem
                            onClick={(e) => {
                              e.stopPropagation();
                              handleClose(e);
                            }}>
                            View Inventory
                          </MenuItem>
                          <MenuItem
                            onClick={(e) => {
                              e.stopPropagation();
                              handleClose(e);
                            }}>
                            Order Condition Report
                          </MenuItem>
                          <MenuItem
                            onClick={(e) => {
                              e.stopPropagation();
                              handleClose(e);
                            }}>
                            View Condition Report
                          </MenuItem>
                          <MenuItem
                            onClick={(e) => {
                              e.stopPropagation();
                              handleClose(e);
                            }}>
                            Notifications
                          </MenuItem>
                          <MenuItem
                            onClick={(e) => {
                              e.stopPropagation();
                              handleClose(e);
                            }}>
                            RFP Release
                          </MenuItem>
                          <MenuItem
                            onClick={(e) => {
                              e.stopPropagation();
                              handleClose(e);
                            }}>
                            Award Information
                          </MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows
                  }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={totalCount}
          rowsPerPage={tableController.pagination.rowsPerPage}
          page={tableController.pagination.page}
          onPageChange={(e, v) => {
            handleTableControllerChange('pagination', { page: v });
          }}
          onRowsPerPageChange={(e) => {
            handleTableControllerChange('pagination', {
              rowsPerPage: e.target.value,
              page: 0
            });
          }}
        />
      </Card>
    </Box>
  );
}

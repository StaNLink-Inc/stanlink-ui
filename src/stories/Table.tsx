import React from 'react';
import MuiTable from '@mui/material/Table';
import MuiTableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableContainer from '@mui/material/TableContainer';
import MuiTableHead from '@mui/material/TableHead';
import MuiTableRow from '@mui/material/TableRow';
import type { TableProps as MuiTableProps } from '@mui/material/Table';
import type { TableBodyProps as MuiTableBodyProps } from '@mui/material/TableBody';
import type { TableCellProps as MuiTableCellProps } from '@mui/material/TableCell';
import type { TableContainerProps as MuiTableContainerProps } from '@mui/material/TableContainer';
import type { TableHeadProps as MuiTableHeadProps } from '@mui/material/TableHead';
import type { TableRowProps as MuiTableRowProps } from '@mui/material/TableRow';

export interface TableProps extends MuiTableProps {}
export interface TableBodyProps extends MuiTableBodyProps {}
export interface TableCellProps extends MuiTableCellProps {}
export interface TableContainerProps extends MuiTableContainerProps {}
export interface TableHeadProps extends MuiTableHeadProps {}
export interface TableRowProps extends MuiTableRowProps {}

export const Table: React.FC<TableProps> = (props) => <MuiTable {...props} />;
export const TableBody: React.FC<TableBodyProps> = (props) => <MuiTableBody {...props} />;
export const TableCell: React.FC<TableCellProps> = (props) => <MuiTableCell {...props} />;
export const TableContainer: React.FC<TableContainerProps> = (props) => <MuiTableContainer {...props} />;
export const TableHead: React.FC<TableHeadProps> = (props) => <MuiTableHead {...props} />;
export const TableRow: React.FC<TableRowProps> = (props) => <MuiTableRow {...props} />;

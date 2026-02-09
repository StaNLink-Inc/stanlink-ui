import React from 'react';
import MuiList from '@mui/material/List';
import MuiListItem from '@mui/material/ListItem';
import type { ListProps as MuiListProps } from '@mui/material/List';
import type { ListItemProps as MuiListItemProps } from '@mui/material/ListItem';

export interface ListProps extends MuiListProps {}
export interface ListItemProps extends MuiListItemProps {}

export const List: React.FC<ListProps> = (props) => {
  return <MuiList {...props} />;
};

export const ListItem: React.FC<ListItemProps> = (props) => {
  return <MuiListItem {...props} />;
};

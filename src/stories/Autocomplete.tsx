import React from 'react';
import MuiAutocomplete from '@mui/material/Autocomplete';
import type { AutocompleteProps as MuiAutocompleteProps } from '@mui/material/Autocomplete';

export interface AutocompleteProps<T> extends MuiAutocompleteProps<T, boolean | undefined, boolean | undefined, boolean | undefined> {}

export const Autocomplete = <T,>(props: AutocompleteProps<T>) => {
  return <MuiAutocomplete {...props} />;
};

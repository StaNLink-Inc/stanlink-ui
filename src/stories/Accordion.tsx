import React from 'react';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import type { AccordionProps as MuiAccordionProps } from '@mui/material/Accordion';
import type { AccordionSummaryProps as MuiAccordionSummaryProps } from '@mui/material/AccordionSummary';
import type { AccordionDetailsProps as MuiAccordionDetailsProps } from '@mui/material/AccordionDetails';

export interface AccordionProps extends MuiAccordionProps {}
export interface AccordionSummaryProps extends MuiAccordionSummaryProps {}
export interface AccordionDetailsProps extends MuiAccordionDetailsProps {}

export const Accordion: React.FC<AccordionProps> = (props) => {
  return <MuiAccordion {...props} />;
};

export const AccordionSummary: React.FC<AccordionSummaryProps> = (props) => {
  return <MuiAccordionSummary {...props} />;
};

export const AccordionDetails: React.FC<AccordionDetailsProps> = (props) => {
  return <MuiAccordionDetails {...props} />;
};

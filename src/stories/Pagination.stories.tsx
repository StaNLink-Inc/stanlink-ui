import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';
import { Stack, Typography } from '@mui/material';

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Basic: Story = {
  render: () => {
    const [page, setPage] = React.useState(1);
    return (
      <Stack spacing={2} alignItems="center">
        <Pagination count={10} page={page} onChange={(_, value) => setPage(value)} />
        <Typography>Page: {page}</Typography>
      </Stack>
    );
  },
};

export const Colors: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} color="standard" />
    </Stack>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination count={10} variant="text" />
      <Pagination count={10} variant="outlined" />
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack spacing={2} alignItems="center">
      <Pagination count={10} size="small" />
      <Pagination count={10} size="medium" />
      <Pagination count={10} size="large" />
    </Stack>
  ),
};

export const Shapes: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination count={10} shape="rounded" />
      <Pagination count={10} shape="circular" />
    </Stack>
  ),
};

export const TradingHistory: Story = {
  render: () => {
    const [page, setPage] = React.useState(1);
    const totalTrades = 142;
    const tradesPerPage = 10;
    const totalPages = Math.ceil(totalTrades / tradesPerPage);
    return (
      <Stack spacing={2} alignItems="center">
        <Typography variant="h6">Trade History</Typography>
        <Typography color="text.secondary">
          Showing {(page - 1) * tradesPerPage + 1}-{Math.min(page * tradesPerPage, totalTrades)} of {totalTrades} trades
        </Typography>
        <Pagination count={totalPages} page={page} onChange={(_, value) => setPage(value)} color="primary" />
      </Stack>
    );
  },
};

export const SkillMarketplace: Story = {
  render: () => {
    const [page, setPage] = React.useState(1);
    return (
      <Stack spacing={2} alignItems="center">
        <Typography variant="h6">Skill Marketplace</Typography>
        <Typography color="text.secondary">Page {page} of 25</Typography>
        <Pagination count={25} page={page} onChange={(_, value) => setPage(value)} color="secondary" variant="outlined" />
      </Stack>
    );
  },
};

export const WithBoundaries: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination count={10} showFirstButton showLastButton />
      <Pagination count={10} hidePrevButton hideNextButton />
    </Stack>
  ),
};

export const Disabled: Story = {
  render: () => <Pagination count={10} disabled />,
};

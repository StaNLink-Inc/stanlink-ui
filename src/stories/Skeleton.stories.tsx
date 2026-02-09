import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';
import { Card } from './Card';
import CardContent from '@mui/material/CardContent';
import { Avatar } from './Avatar';

const meta: Meta<typeof Skeleton> = {
  title: 'StaNLink/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Text: Story = {
  render: () => <Skeleton width={210} animation="wave" />,
};

export const Circular: Story = {
  render: () => <Skeleton variant="circular" width={40} height={40} animation="wave" />,
};

export const Rectangular: Story = {
  render: () => <Skeleton variant="rectangular" width={210} height={118} animation="wave" />,
};

export const Rounded: Story = {
  render: () => <Skeleton variant="rounded" width={210} height={60} animation="wave" />,
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} animation="wave" />
      <Skeleton variant="circular" width={40} height={40} animation="wave" />
      <Skeleton variant="rectangular" width={210} height={60} animation="wave" />
      <Skeleton variant="rounded" width={210} height={60} animation="wave" />
    </div>
  ),
};

export const Animations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Skeleton animation="pulse" width={210} />
      <Skeleton animation="wave" width={210} />
      <Skeleton animation={false} width={210} />
    </div>
  ),
};

export const UserCardSkeleton: Story = {
  render: () => (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Skeleton variant="circular" width={56} height={56} animation="wave" />
          <div style={{ flex: 1 }}>
            <Skeleton variant="text" sx={{ fontSize: '1.25rem' }} width="60%" animation="wave" />
            <Skeleton variant="text" sx={{ fontSize: '0.875rem' }} width="40%" animation="wave" />
          </div>
        </div>
        <Skeleton variant="text" sx={{ mt: 2 }} animation="wave" />
        <Skeleton variant="text" animation="wave" />
        <Skeleton variant="text" width="80%" animation="wave" />
      </CardContent>
    </Card>
  ),
};

export const SkillCardSkeleton: Story = {
  render: () => (
    <Card sx={{ maxWidth: 345 }}>
      <Skeleton variant="rectangular" height={140} animation="wave" />
      <CardContent>
        <Skeleton variant="text" sx={{ fontSize: '0.75rem' }} width="40%" animation="wave" />
        <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} width="70%" animation="wave" />
        <Skeleton variant="text" sx={{ mt: 1 }} animation="wave" />
        <Skeleton variant="text" width="90%" animation="wave" />
        <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
          <div style={{ flex: 1 }}>
            <Skeleton variant="text" sx={{ fontSize: '0.75rem' }} animation="wave" />
            <Skeleton variant="text" sx={{ fontSize: '1.25rem' }} animation="wave" />
          </div>
          <div style={{ flex: 1 }}>
            <Skeleton variant="text" sx={{ fontSize: '0.75rem' }} animation="wave" />
            <Skeleton variant="text" sx={{ fontSize: '1.25rem' }} animation="wave" />
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};

export const ListSkeleton: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      {[...Array(5)].map((_, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Skeleton variant="circular" width={40} height={40} animation="wave" />
          <div style={{ flex: 1 }}>
            <Skeleton variant="text" width="60%" animation="wave" />
            <Skeleton variant="text" width="40%" animation="wave" />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const TradingDashboardSkeleton: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px' }}>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Skeleton variant="text" width="40%" animation="wave" />
            <Skeleton variant="text" sx={{ fontSize: '2rem' }} width="60%" animation="wave" />
          </CardContent>
        </Card>
        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Skeleton variant="text" width="40%" animation="wave" />
            <Skeleton variant="text" sx={{ fontSize: '2rem' }} width="60%" animation="wave" />
          </CardContent>
        </Card>
        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Skeleton variant="text" width="40%" animation="wave" />
            <Skeleton variant="text" sx={{ fontSize: '2rem' }} width="60%" animation="wave" />
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardContent>
          <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} width="30%" animation="wave" />
          <Skeleton variant="rectangular" height={200} sx={{ mt: 2 }} animation="wave" />
        </CardContent>
      </Card>
    </div>
  ),
};

export const LoadingTransition: Story = {
  render: () => {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 3000);
      return () => clearTimeout(timer);
    }, []);

    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          {loading ? (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Skeleton variant="circular" width={56} height={56} animation="wave" />
                <div style={{ flex: 1 }}>
                  <Skeleton variant="text" sx={{ fontSize: '1.25rem' }} width="60%" animation="wave" />
                  <Skeleton variant="text" sx={{ fontSize: '0.875rem' }} width="40%" animation="wave" />
                </div>
              </div>
              <Skeleton variant="text" sx={{ mt: 2 }} animation="wave" />
              <Skeleton variant="text" animation="wave" />
            </>
          ) : (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Avatar>JD</Avatar>
                <div>
                  <div style={{ fontWeight: 600 }}>John Doe</div>
                  <div style={{ fontSize: '0.875rem', color: '#5F6368' }}>@johndoe</div>
                </div>
              </div>
              <p style={{ marginTop: '16px' }}>
                Professional trader specializing in forex strategies.
              </p>
            </>
          )}
        </CardContent>
      </Card>
    );
  },
};

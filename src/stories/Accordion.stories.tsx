import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionSummary, AccordionDetails } from './Accordion';
import { Typography, Stack } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const meta: Meta<typeof Accordion> = {
  title: 'Display/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Basic: Story = {
  render: () => (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Content for accordion 1</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Content for accordion 2</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Content for accordion 3</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');
    return (
      <div>
        <Accordion expanded={expanded === 'panel1'} onChange={() => setExpanded(expanded === 'panel1' ? false : 'panel1')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Panel 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Content 1</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={() => setExpanded(expanded === 'panel2' ? false : 'panel2')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Panel 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Content 2</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  },
};

export const SkillDetails: Story = {
  render: () => (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="bold">Performance Metrics</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1}>
            <Stack direction="row" justifyContent="space-between">
              <Typography color="text.secondary">Accuracy</Typography>
              <Typography fontWeight="bold" color="success.main">87.5%</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography color="text.secondary">Sharpe Ratio</Typography>
              <Typography fontWeight="bold">2.4</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography color="text.secondary">Win Rate</Typography>
              <Typography fontWeight="bold">68.5%</Typography>
            </Stack>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="bold">Trading Parameters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1}>
            <Typography variant="body2">• Max Position Size: 10%</Typography>
            <Typography variant="body2">• Stop Loss: 2%</Typography>
            <Typography variant="body2">• Take Profit: 5%</Typography>
            <Typography variant="body2">• Max Daily Trades: 5</Typography>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="bold">Deployment History</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1}>
            <Typography variant="body2">• v2.1 - Deployed 2 days ago</Typography>
            <Typography variant="body2">• v2.0 - Deployed 1 week ago</Typography>
            <Typography variant="body2">• v1.5 - Deployed 2 weeks ago</Typography>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </div>
  ),
};

export const FAQ: Story = {
  render: () => (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What is a .pyp file?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A .pyp file is an AI-powered trading skill that contains machine learning models, 
            strategies, and configurations for automated trading.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How do I deploy a skill?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Click the "Deploy" button on any skill card, configure your parameters, 
            and select your target platforms (Telegram, WhatsApp, Discord, or Web).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Can I monetize my skills?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes! You can list your skills on the marketplace and earn revenue 
            when other traders subscribe to your signals.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Accordion disabled>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Disabled Accordion</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>This content cannot be expanded</Typography>
      </AccordionDetails>
    </Accordion>
  ),
};

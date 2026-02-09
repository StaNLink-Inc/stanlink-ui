import React, { useState } from 'react';
import { Box, Paper, Typography, Grid, styled } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const MegaMenuTrigger = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  cursor: 'pointer',
  borderRadius: theme.shape.borderRadius,
  transition: 'background-color 0.2s',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const MegaMenuDropdown = styled(Paper)(({ theme }) => ({
  position: 'fixed',
  left: 0,
  right: 0,
  padding: theme.spacing(3),
  boxShadow: theme.shadows[8],
  animation: 'slideDown 0.2s ease-out',
  '@keyframes slideDown': {
    from: { opacity: 0, transform: 'translateY(-8px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
}));

const MenuItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5),
  borderRadius: theme.shape.borderRadius,
  cursor: 'pointer',
  transition: 'all 0.2s',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    transform: 'translateX(4px)',
  },
}));

export interface MegaMenuSection {
  title: string;
  items: { label: string; description?: string; onClick?: () => void }[];
}

export interface MegaMenuProps {
  label: string;
  sections: MegaMenuSection[];
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ label, sections }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box 
      sx={{ position: 'relative' }} 
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <MegaMenuTrigger>
        {label}
        <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
      </MegaMenuTrigger>
      {open && (
        <Box sx={{ position: 'absolute', left: 0, right: 0, top: '100%', pt: 1 }}>
          <MegaMenuDropdown>
            <Grid container spacing={3}>
              {sections.map((section, idx) => (
                <Grid item xs={12} sm={6} md={3} key={idx}>
                  <Typography variant="overline" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                    {section.title}
                  </Typography>
                  {section.items.map((item, i) => (
                    <MenuItem key={i} onClick={item.onClick}>
                      <Typography variant="body2" fontWeight={500}>{item.label}</Typography>
                      {item.description && (
                        <Typography variant="caption" color="text.secondary">{item.description}</Typography>
                      )}
                    </MenuItem>
                  ))}
                </Grid>
              ))}
            </Grid>
          </MegaMenuDropdown>
        </Box>
      )}
    </Box>
  );
};

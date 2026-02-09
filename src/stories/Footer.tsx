import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import { StaNLinkGraphic } from './StaNLinkGraphic';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  sections?: FooterSection[];
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  copyrightText?: string;
  showGraphic?: boolean;
  graphicPosition?: 'background' | 'middle';
}

export const Footer: React.FC<FooterProps> = ({
  sections = [],
  socialLinks = {},
  copyrightText = '© 2024 StaNLink. All rights reserved.',
  showGraphic = true,
  graphicPosition = 'background',
}) => {
  return (
    <Box component="footer" sx={{ bgcolor: 'grey.900', color: 'white', position: 'relative', overflow: 'hidden', py: 6 }}>
      {showGraphic && graphicPosition === 'background' && (
        <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, pointerEvents: 'none' }}>
          <StaNLinkGraphic text="STANLINK" opacity={0.03} />
        </Box>
      )}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4}>
          {sections.map((section, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                {section.title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    color="inherit"
                    underline="hover"
                    sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {showGraphic && graphicPosition === 'middle' && (
          <Box sx={{ my: 4, pointerEvents: 'none' }}>
            <StaNLinkGraphic text="STANLINK" opacity={0.05} />
          </Box>
        )}

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            {copyrightText}
          </Typography>

          <Box sx={{ display: 'flex', gap: 1 }}>
            {socialLinks.facebook && (
              <IconButton href={socialLinks.facebook} color="inherit" size="small">
                <FacebookIcon />
              </IconButton>
            )}
            {socialLinks.twitter && (
              <IconButton href={socialLinks.twitter} color="inherit" size="small">
                <TwitterIcon />
              </IconButton>
            )}
            {socialLinks.linkedin && (
              <IconButton href={socialLinks.linkedin} color="inherit" size="small">
                <LinkedInIcon />
              </IconButton>
            )}
            {socialLinks.github && (
              <IconButton href={socialLinks.github} color="inherit" size="small">
                <GitHubIcon />
              </IconButton>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

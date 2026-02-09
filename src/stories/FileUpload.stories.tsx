import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from './FileUpload';
import { Box, Typography, Chip, Stack, Paper, IconButton } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ImageIcon from '@mui/icons-material/Image';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DeleteIcon from '@mui/icons-material/Delete';

const meta: Meta<typeof FileUpload> = {
  title: 'Input/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Basic: Story = {
  render: () => {
    const [files, setFiles] = React.useState<File[]>([]);
    
    const getFileIcon = (fileName: string) => {
      if (fileName.match(/\.(jpg|jpeg|png|gif|svg)$/i)) return <ImageIcon />;
      if (fileName.match(/\.pdf$/i)) return <PictureAsPdfIcon />;
      return <InsertDriveFileIcon />;
    };
    
    const formatFileSize = (bytes: number) => {
      if (bytes < 1024) return bytes + ' B';
      if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
      return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    };
    
    return (
      <Box>
        <FileUpload onFileSelect={(fileList) => setFiles(Array.from(fileList))} />
        {files.length > 0 && (
          <Stack spacing={1} sx={{ mt: 2 }}>
            {files.map((file, i) => (
              <Paper key={i} sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ color: 'primary.main' }}>{getFileIcon(file.name)}</Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="body2" fontWeight={500}>{file.name}</Typography>
                  <Typography variant="caption" color="text.secondary">{formatFileSize(file.size)}</Typography>
                </Box>
                <IconButton size="small" onClick={() => setFiles(files.filter((_, idx) => idx !== i))}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Paper>
            ))}
          </Stack>
        )}
      </Box>
    );
  },
};

export const SkillUpload: Story = {
  render: () => {
    const [files, setFiles] = React.useState<File[]>([]);
    
    const formatFileSize = (bytes: number) => {
      if (bytes < 1024) return bytes + ' B';
      if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
      return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    };
    
    return (
      <Box>
        <Typography variant="h6" gutterBottom>Upload Trading Skill</Typography>
        <FileUpload accept=".pyp" onFileSelect={(fileList) => setFiles(Array.from(fileList))} />
        {files.length > 0 && (
          <Stack spacing={1} sx={{ mt: 2 }}>
            {files.map((file, i) => (
              <Paper key={i} sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, bgcolor: 'primary.light', color: 'primary.contrastText' }}>
                <InsertDriveFileIcon />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="body2" fontWeight={500}>{file.name}</Typography>
                  <Typography variant="caption">{formatFileSize(file.size)}</Typography>
                </Box>
                <IconButton size="small" sx={{ color: 'inherit' }} onClick={() => setFiles(files.filter((_, idx) => idx !== i))}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Paper>
            ))}
          </Stack>
        )}
      </Box>
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const [files, setFiles] = React.useState<File[]>([]);
    
    const getFileIcon = (fileName: string) => {
      if (fileName.match(/\.(jpg|jpeg|png|gif|svg)$/i)) return <ImageIcon />;
      if (fileName.match(/\.pdf$/i)) return <PictureAsPdfIcon />;
      return <InsertDriveFileIcon />;
    };
    
    const formatFileSize = (bytes: number) => {
      if (bytes < 1024) return bytes + ' B';
      if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
      return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    };
    
    return (
      <Box>
        <FileUpload multiple onFileSelect={(fileList) => setFiles(Array.from(fileList))} />
        {files.length > 0 && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" gutterBottom fontWeight={500}>{files.length} files selected</Typography>
            <Stack spacing={1}>
              {files.map((file, i) => (
                <Paper key={i} sx={{ p: 1.5, display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ color: 'primary.main' }}>{getFileIcon(file.name)}</Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="body2">{file.name}</Typography>
                    <Typography variant="caption" color="text.secondary">{formatFileSize(file.size)}</Typography>
                  </Box>
                  <IconButton size="small" onClick={() => setFiles(files.filter((_, idx) => idx !== i))}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Paper>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
    );
  },
};

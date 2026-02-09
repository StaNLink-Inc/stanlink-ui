import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export interface FileUploadProps {
  onFileSelect?: (files: FileList) => void;
  accept?: string;
  multiple?: boolean;
  maxSize?: number;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect, accept, multiple = false }) => {
  const [dragActive, setDragActive] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileSelect?.(e.dataTransfer.files);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileSelect?.(e.target.files);
    }
  };

  return (
    <Box
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      sx={{
        border: '2px dashed',
        borderColor: dragActive ? 'primary.main' : 'grey.300',
        borderRadius: 2,
        p: 4,
        textAlign: 'center',
        bgcolor: dragActive ? 'action.hover' : 'background.paper',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': { borderColor: 'primary.main', bgcolor: 'action.hover' },
      }}
      onClick={() => inputRef.current?.click()}
    >
      <input ref={inputRef} type="file" accept={accept} multiple={multiple} onChange={handleChange} style={{ display: 'none' }} />
      <CloudUploadIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
      <Typography variant="h6" gutterBottom>Drag & drop files here</Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>or</Typography>
      <Button variant="contained" sx={{ mt: 1 }}>Browse Files</Button>
    </Box>
  );
};

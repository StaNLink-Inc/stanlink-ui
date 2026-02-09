import React from 'react';
import { Box, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export interface SearchBarProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
  results?: Array<{ title: string; subtitle?: string }>;
  onResultClick?: (result: any) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = 'Search...', 
  onSearch,
  results = [],
  onResultClick,
}) => {
  const [expanded, setExpanded] = React.useState(false);
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setExpanded(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
      if (e.key === 'Escape') {
        setExpanded(false);
        setValue('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onSearch?.(e.target.value);
  };

  const handleClear = () => {
    setValue('');
    setExpanded(false);
    onSearch?.('');
  };

  return (
    <Box sx={{ position: 'relative', zIndex: expanded ? 1200 : 1 }}>
      <Box
        onClick={() => setExpanded(true)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'rgba(255,255,255,0.15)',
          borderRadius: 3,
          px: 2,
          py: 0.75,
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          width: 200,
          maxWidth: expanded ? 500 : 200,
          position: 'relative',
          '&:hover': {
            bgcolor: 'rgba(255,255,255,0.25)',
          },
        }}
      >
        <SearchIcon sx={{ mr: 1, opacity: 0.7 }} />
        <InputBase
          inputRef={inputRef}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          sx={{
            flex: 1,
            color: 'inherit',
            '& input': {
              padding: 0,
            },
          }}
        />
        {expanded && value ? (
          <IconButton size="small" onClick={handleClear} sx={{ color: 'inherit', ml: 1 }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        ) : !expanded ? (
          <Box sx={{ 
            bgcolor: 'rgba(255,255,255,0.2)', 
            px: 1, 
            py: 0.25, 
            borderRadius: 1,
            fontSize: '0.75rem',
            fontWeight: 600,
          }}>
            ⌘K
          </Box>
        ) : null}
      </Box>

      {expanded && value && results.length > 0 && (
        <Box
          sx={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            mt: 1,
            bgcolor: 'white',
            borderRadius: 2,
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            maxHeight: 400,
            overflow: 'auto',
            zIndex: 1300,
          }}
        >
          {results.map((result, i) => (
            <Box
              key={i}
              onClick={() => {
                onResultClick?.(result);
                handleClear();
              }}
              sx={{
                p: 2,
                cursor: 'pointer',
                transition: 'all 0.2s',
                borderBottom: i < results.length - 1 ? '1px solid' : 'none',
                borderColor: 'divider',
                '&:hover': {
                  bgcolor: 'primary.light',
                  color: 'white',
                  transform: 'translateX(8px)',
                },
              }}
            >
              <Box sx={{ fontWeight: 600 }}>{result.title}</Box>
              {result.subtitle && (
                <Box sx={{ fontSize: '0.875rem', opacity: 0.7, mt: 0.5 }}>{result.subtitle}</Box>
              )}
            </Box>
          ))}
        </Box>
      )}

      {expanded && (
        <Box
          onClick={handleClear}
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1100,
          }}
        />
      )}
    </Box>
  );
};

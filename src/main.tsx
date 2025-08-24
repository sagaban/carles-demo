import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from './theme/AppTheme';
import Router from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from 'providers/AuthProvider';

const queryClient = new QueryClient();

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <AppTheme>
          <CssBaseline enableColorScheme />
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </AppTheme>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);

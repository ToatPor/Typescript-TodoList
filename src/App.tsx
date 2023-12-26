import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { FC, ReactElement } from 'react';
import { customTheme } from './theme/Theme';
import { GlobalStyled } from './styled/GlobalStyled';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Dashborad } from './pages/Dashboard';
import { AppLayout } from './UI/AppLayout';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

//FC stand for functionCompoenet return react component
const App: FC = function (): ReactElement {
  const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
      queries: { staleTime: 0 },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={customTheme}>
        <GlobalStyled />
        <CssBaseline />
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            {/*route change sidebar still there change only sub route of applyout */}
            <Route element={<AppLayout />}>
              {/* no matter what will nivigate to dashboard first place */}
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashborad />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;

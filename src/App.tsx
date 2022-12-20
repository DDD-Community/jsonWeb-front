import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@emotion/react';

import LoginPage from './pages/login';
import CafeListPage from './pages/cafeList';
import DetailPage from './pages/detail';
import MyAccountPage from './pages/myAccount';
import NotFoundPage from './pages/NotFound';
import GlobalStyle from './styles/Global';
import { CustomTheme } from './styles/Theme';
import Header from './components/blocks/Header';
import Nav from './components/blocks/Nav';
import { BottomNavWrapper } from './components/template/layoutWrapper';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Routes>
            {/* login page */}
            <Route path="login" element={<LoginPage />} />

            {/* cafeList page */}
            <Route index element={<CafeListPage />} />

            {/* DetailPage page */}
            <Route path="cafe-detail" element={<DetailPage />} />

            {/* cafeList page */}
            <Route path="my-account" element={<MyAccountPage />} />

            {/* to not found */}
            <Route path="*" element={<Navigate to="not-found" />} />

            {/* not found */}
            <Route path="not-found" element={<NotFoundPage />} />
          </Routes>
          <BottomNavWrapper>
            <Nav />
          </BottomNavWrapper>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;

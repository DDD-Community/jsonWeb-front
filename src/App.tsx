import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@emotion/react';
import { CustomTheme } from '@styles/Theme';
import { queryClient } from '@api/queryClient';
import { KakaoLogin, KakaoLogout } from '@pages/login/kakaoSign';

import LoginPage from '@pages/login';
import CafeListPage from '@pages/cafeList';
import DetailPage from '@pages/detail';
import MyAccountPage from '@pages/myAccount';
import TypiCodePage from '@pages/typiCode';
import NotFoundPage from '@pages/NotFound';
import GlobalStyle from '@styles/Global';

import Header from '@components/blocks/Header';
import Nav from '@components/blocks/Nav';
import { BottomNavWrapper } from '@src/components/template/PageLayoutWrapper';
import SearchPage from './pages/search';

function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Header />
            <GlobalStyle />
            <Routes>
              {/* typicode page */}
              <Route path="typicode" element={<TypiCodePage />} />

              {/* login page */}
              <Route path="login" element={<LoginPage />} />
              <Route path="user/login" element={<KakaoLogin />} />
              <Route path="user/logout" element={<KakaoLogout />} />

              {/* cafeList page */}
              <Route index element={<CafeListPage />} />

              {/* search page */}
              <Route path="search" element={<SearchPage />} />

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
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;

import { Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@emotion/react';
import { CustomTheme } from '@styles/Theme';
import { queryClient } from '@api/queryClient';
import KakaoSign from '@pages/login/kakaoSign';

import LoginPage from '@pages/login';
import CafeListPage from '@pages/cafeList';
import ReviewDetailPage from '@pages/review/detail';
import ReviewEditPage from '@pages/review/edit';
import CertifyEditPage from '@pages/certify/edit';
import DetailPage from '@pages/detail';
import ReviewPage from '@pages/detail/Review';
import MyAccountPage from '@pages/myAccount';
import LikeListPage from '@pages/myAccount/like';
import TypiCodePage from '@pages/typiCode';
import NotFoundPage from '@pages/NotFound';
import GlobalStyle from '@styles/Global';

import Header from '@components/blocks/Header';
import Nav from '@components/blocks/Nav';
import LoadingSpinner from '@components/atom/LoadingSpinner';
import { BottomNavWrapper } from '@src/components/template/PageLayoutWrapper';
import SearchPage from './pages/search';

function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Suspense fallback={<LoadingSpinner isLoading isFixed />}>
              <Header />
              <GlobalStyle />
              <Routes>
                <Route path="typicode" element={<TypiCodePage />} />
                <Route index element={<CafeListPage />} />
                <Route
                  path="review/detail/:themeId"
                  element={<ReviewDetailPage />}
                />
                <Route path="login" element={<LoginPage />} />
                <Route
                  path="users/login"
                  element={<KakaoSign method="LOGIN" />}
                />
                <Route
                  path="users/logout"
                  element={<KakaoSign method="LOGOUT" />}
                />
                <Route path="review/edit" element={<ReviewEditPage />} />
                <Route path="certify/edit" element={<CertifyEditPage />} />
                <Route path="search" element={<SearchPage />} />
                <Route path="cafe-detail" element={<DetailPage />}>
                  <Route index element={<DetailPage />} />
                  <Route path="cafe/review" element={<ReviewPage />} />
                  <Route path="certification" element={<DetailPage />} />
                </Route>
                <Route path="my-account" element={<MyAccountPage />} />
                <Route path="my-account/like" element={<LikeListPage />} />
                <Route path="*" element={<Navigate to="not-found" />} />
                <Route path="not-found" element={<NotFoundPage />} />
              </Routes>
              <BottomNavWrapper>
                <Nav />
              </BottomNavWrapper>
            </Suspense>
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;

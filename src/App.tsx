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
import BoastPage from '@pages/boast/list';
import BoastEditPage from '@pages/boast/edit';
import DetailPage from '@pages/detail';
import MyAccountPage from '@pages/myAccount';
import MyReviewPage from '@src/pages/myAccount/review';
import MyBoastPage from '@src/pages/myAccount/boast';
import MyLikePage from '@src/pages/myAccount/like';
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
            <Suspense fallback={<LoadingSpinner isLoading isFixed />}>
              <Header />
              <GlobalStyle />
              <Routes>
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
                <Route path="boast/edit" element={<BoastEditPage />} />
                <Route path="search" element={<SearchPage />} />
                <Route path="cafe-detail" element={<DetailPage />} />
                <Route path="boast" element={<BoastPage />} />
                <Route path="my-account" element={<MyAccountPage />} />
                <Route path="my-account/review" element={<MyReviewPage />} />
                <Route path="my-account/boast" element={<MyBoastPage />} />
                <Route path="my-account/like" element={<MyLikePage />} />
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

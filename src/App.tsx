import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoginPage from './pages/LoginPage';
import CafeListPage from './pages/CafeListPage';
import DetailPage from './pages/DetailPage';
import MyAccountPage from './pages/MyAccountPage';
import NotFoundPage from './pages/NotFoundPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
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
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

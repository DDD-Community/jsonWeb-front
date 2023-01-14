import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import ReactGA from 'react-ga';
import App from './App';
import AppLayoutWrapper from './components/template/AppLayoutWrapper';
import reportWebVitals from './reportWebVitals';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID || '');

Sentry.init({
  dsn:
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_SENTRY_DSN
      : undefined,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppLayoutWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppLayoutWrapper>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

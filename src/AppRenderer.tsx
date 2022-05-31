import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense, useEffect } from 'react';
import { useClearCache } from 'react-clear-cache';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { GlobalStyles } from './components/styled/GlobalStyles';
import App from './routes/App';
import configureStore from './store/configureStore';

const { store, persistor } = configureStore();

const container = document.getElementById('app');

const root = createRoot(container);

const Main = () => {
  const { isLatestVersion, emptyCacheStorage } = useClearCache();

  useEffect(() => {
    if (!isLatestVersion) {
      emptyCacheStorage();
    }
  }, [emptyCacheStorage, isLatestVersion]);

  return (
    <Provider store={store}>
      <Suspense fallback={<div className="loading" />}>
        <GlobalStyles />
        <App />
      </Suspense>
    </Provider>
  );
};

root.render(<Main />);

  import React, { useEffect } from 'react';
  import { Provider } from 'react-redux';
  import store from './store';
  import AppNavigation from './navigation/AppNavigation';
import { fetchQuotes, fetchNews } from './actions';

  export default function App() {
    // Fetch quotes when the app mounts
    useEffect(() => {
      store.dispatch(fetchQuotes());
      store.dispatch(fetchNews());
    }, []);

    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }

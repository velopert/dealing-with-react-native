import React from 'react';
import {Provider} from 'react-redux';
import rootReducer from './slices';
import {configureStore} from '@reduxjs/toolkit';
import PostsApp from './components/PostsApp';

const store = configureStore({reducer: rootReducer});

function App() {
  return (
    <Provider store={store}>
      <PostsApp />
    </Provider>
  );
}

export default App;

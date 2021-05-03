import React from 'react';
import {RecoilRoot} from 'recoil';
import PostsApp from './components/PostsApp';

function App() {
  return (
    <RecoilRoot>
      <PostsApp />
    </RecoilRoot>
  );
}

export default App;

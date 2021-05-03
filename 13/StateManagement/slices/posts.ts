import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getPosts} from '../api/getPosts';
import {Post} from '../api/types';

// 첫번째 파라미터에는 '슬라이스 이름/함수 이름' 을 넣어 주세요.
// 두번째 파라미터에는 요청하고 싶은 함수를 넣어주세요.
export const fetchPosts = createAsyncThunk('posts/fetchUsers', getPosts);

interface PostsState {
  posts: {
    loading: boolean;
    data: Post[] | null;
    error: Error | null;
  };
}

const initialState: PostsState = {
  // 로딩, 결과, 오류 상태를 다룹니다
  posts: {
    loading: false,
    data: null,
    error: null,
  },
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending.type]: (state) => {
      // 요청이 시작했을 때, loading을 false 로 설정하고 나마저 값들은 null 로 설정합니다.
      state.posts = {
        loading: true,
        data: null,
        error: null,
      };
    },
    [fetchPosts.fulfilled.type]: (state, action: PayloadAction<Post[]>) => {
      // 요청이 성공했을 때, loading을 false로 하고 data 값을 설정합니다.
      state.posts.data = action.payload;
      state.posts.loading = false;
    },
    [fetchPosts.rejected.type]: (state, action: PayloadAction<Error>) => {
      // 요청이 실패했을 때, loading을 false로 하고 error 값을 설정합니다.
      state.posts.error = action.payload;
      state.posts.loading = false;
    },
  },
});

export default postsSlice.reducer;

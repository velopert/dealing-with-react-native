import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// 추후 컴포넌트에서 불러와야 하기 때문에 export
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const initialState: Todo[] = [
  {id: 1, text: '리액트 네이티브 배우기', done: true},
  {id: 2, text: '상태 관리 배우기', done: false},
]; // 상태의 타입은 Todo의 배열

let nextId = 1; // 새 Todo 항목을 추가 할 때 사용 할 id 값

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    // 액션 생성 함수가 호출되어 액션이 만들기 전에 특정 작업을 수행
    // add('리덕스 배우기') -> { type: 'todos/add', payload: {id: 1, text: '리덕스 배우기'} }
    add: {
      prepare(text: string) {
        const prepared = {payload: {id: nextId, text}};
        nextId += 1;
        return prepared;
      },
      reducer(state, action: PayloadAction<{id: number; text: string}>) {
        state.push({
          ...action.payload,
          done: false,
        });
      },
    },
    // id로 원하는 원소 제거
    remove(state, action: PayloadAction<number>) {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index);
      // 또는 return state.filter((todo) => todo.id !== action.payload);
    },
    // id로 원하는 원소 done 값 토글
    toggle(state, action: PayloadAction<number>) {
      // 불변성이 알아서 관리되기 때문에 .map 사용하지 않고
      // 원하는 원소 찾아서 바로 수정해주면 됩니다
      const selected = state.find((todo) => todo.id === action.payload);
      if (!selected) {
        return;
      }
      selected.done = !selected.done;
    },
  },
});

export const {add, remove, toggle} = todosSlice.actions;
export default todosSlice.reducer;

import {atom, selector, selectorFamily} from 'recoil';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const todosState = atom<Todo[]>({
  key: 'todosState',
  default: [
    {id: 1, text: '리액트 네이티브 배우기', done: true},
    {id: 2, text: '상태 관리 배우기', done: false},
  ],
});

export const nextTodoId = selector({
  key: 'nextTodoId',
  get: ({get}) => {
    const todos = get(todosState);
    // 마지막 항목의 id를 조회하고 만약 값이 존재하지 않으면 0을 사용
    const lastId = todos[todos.length - 1]?.id ?? 0;
    return lastId + 1; // lastId에서 1을 더한 값을 새로운 항목의 id로 사용
  },
});

export const todoById = selectorFamily({
  key: 'todoById',
  get: (id: number) => ({get}) =>
    get(todosState).find((todo) => todo.id === id),
});

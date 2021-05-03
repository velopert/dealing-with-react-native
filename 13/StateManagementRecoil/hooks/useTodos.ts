import {useRecoilValue} from 'recoil';
import {todosState} from '../atoms/todos';

export default function useTodos() {
  return useRecoilValue(todosState);
}

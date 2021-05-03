import {useSelector} from 'react-redux';

export default function useTodos() {
  return useSelector((state) => state.todos);
}

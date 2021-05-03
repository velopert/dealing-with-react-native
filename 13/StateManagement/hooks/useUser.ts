import {useSelector} from 'react-redux';

export default function useUser() {
  return useSelector((state) => state.auth.user);
}

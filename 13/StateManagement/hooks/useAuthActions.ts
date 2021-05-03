import {bindActionCreators} from 'redux';
import {useDispatch} from 'react-redux';
import {authorize, logout} from '../slices/auth';
import {useMemo} from 'react';

export default function useAuthActions() {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators({authorize, logout}, dispatch), [
    dispatch,
  ]);
}

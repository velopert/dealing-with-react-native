import {useMemo} from 'react';
import {useSetRecoilState} from 'recoil';
import {authState, User} from '../atoms/auth';

export default function useAuthActions() {
  const set = useSetRecoilState(authState);

  return useMemo(
    () => ({
      authorize: (user: User) => {
        set({user});
      },
      logout: () => {
        set({user: null});
      },
    }),
    [set],
  );
}

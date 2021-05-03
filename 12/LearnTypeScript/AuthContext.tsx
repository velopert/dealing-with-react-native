import React, {createContext, useContext, useState} from 'react';

interface User {
  id: number;
  username: string;
}

interface AuthContextValue {
  user: User | null;
  setUser(user: User): void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthContextProvider({children}: {children: React.ReactNode}) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const auth = useContext(AuthContext);
  // auth의 유효성을 검사해주어야, `useAuth`의 반환값 타입이 AuthContextValue로 됨
  if (!auth) {
    throw new Error('AuthContextProvider is not used'); // throw 를 하여 null 타입 제외
  }
  return auth;
}

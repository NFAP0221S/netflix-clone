import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";

import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { auth } from "../../firebase";

interface IAuth {
  user: User | null;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  error: string | null;
  loading: boolean;
}

// 사용자 인증 관련 정보와 함수를 제공하는 컨텍스트 생성
const AuthContext = createContext<IAuth>({
  user: null,
  signUp: async () => {},
  signIn: async () => {},
  logout: async () => {},
  error: null,
  loading: false,
});

// AuthProvider 컴포넌트 정의
interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  // 상태값 초기화
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);
  const router = useRouter();

  // 회원가입
  const signUp = async (email: string, password: string) => {
    setLoading(true);

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        router.push("/");
        setLoading(false);
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  };

  // 로그인
  const signIn = async (email: string, password: string) => {
    setLoading(true);

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        router.push("/");
        setLoading(false);
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  };

  // 로그아웃
  const logout = async () => {
    setLoading(true);

    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  };

  // 컨텍스트 값 메모이제이션
  const memoedValue = useMemo(
    () => ({
      user,
      signUp,
      signIn,
      loading,
      logout,
      error,
    }),
    [user, loading]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!initialLoading && children}
    </AuthContext.Provider>
  );
};

// useAuth 훅 정의
export default function useAuth() {
  return useContext(AuthContext);
}

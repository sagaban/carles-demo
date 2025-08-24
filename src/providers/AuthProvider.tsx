import { useEffect, useState, type PropsWithChildren } from 'react';
import { AxiosError } from 'axios';
import type { User, SignInCredentials } from 'types/auth';
import { createSessionCookies, getToken, removeSessionCookies } from 'utils/authCookies';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User>();
  const [loadingUserData, setLoadingUserData] = useState(true);

  const token = getToken();
  const isAuthenticated = Boolean(token);

  const signIn = async (params: SignInCredentials) => {
    // const { email, password } = params;

    try {
      // const response = await ApiService.post('/auth/login', { email, password });
      const response = {
        data: {
          token: '123',
          refreshToken: '123',
          user: {
            name: 'John Doe',
            email: 'john.doe@example.com',
          },
        },
      };
      const { token, refreshToken, user } = response.data;

      createSessionCookies({ token, refreshToken });
      setUser(user);
      // setAuthorizationHeader({ request: api.defaults, token });
    } catch (error) {
      const err = error as AxiosError;
      return err;
    }
  };

  const signOut = () => {
    removeSessionCookies();
    setUser(undefined);
    setLoadingUserData(false);
    window.location.href = '/';
  };

  useEffect(() => {
    if (!token) {
      removeSessionCookies();
      setUser(undefined);
      setLoadingUserData(false);
    }
  }, [token]);

  // If the authentication endpoint does not return the user data, we can use this effect to get the user data
  // useEffect(() => {
  //   const token = getToken();

  //   async function getUserData() {
  //     setLoadingUserData(true);

  //     try {
  //       const response = await api.get('/me');

  //       if (response?.data) {
  //         const { email, permissions, roles } = response.data;
  //         setUser({ email, permissions, roles });
  //       }
  //     } catch (error) {
  //       /**
  //        * an error handler can be added here
  //        */
  //     } finally {
  //       setLoadingUserData(false);
  //     }
  //   }

  //   if (token) {
  //     // setAuthorizationHeader({ request: api.defaults, token });
  //     getUserData();
  //   }
  // }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loadingUserData,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

import type { AxiosError } from 'axios';

export type User = {
  name: string;
  email: string;
  // permissions: string[];
  // roles: string[];
};

export type SignInCredentials = {
  email: string;
  password: string;
};

export type AuthContextData = {
  user?: User;
  isAuthenticated: boolean;
  loadingUserData: boolean;
  signIn: (credentials: SignInCredentials) => Promise<void | AxiosError>;
  signOut: () => void;
};

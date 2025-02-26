"use client";

import { createContext, useContext, useState } from "react";
import { AuthService } from "../services/auth-services";
import { UserLoginType, UserType } from "../types/user-types";

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUserName, setCurrentUserName] = useState<string | null>(null);

  const handleLogin = async (UserLogin: UserLoginType) => {
    try {
      const res = await AuthService.login(UserLogin);
      if (res) {
        setCurrentUserName(res.name);
        return res
      }

      return null
    } catch (error) {
      console.error(error);
      return null
    }
  };

  const handleLogout = async () => {
    return setCurrentUserName(null);
  };

  const ContextValues = {
    currentUserName,
    handleLogin,
    handleLogout,
  };

  return <UserContext value={ContextValues}>{children}</UserContext>;
};


const AuthContext = {
  currentUserName: null,
  handleLogin: async () => null,
  handleLogout: async () => null,
};

type AuthContextType = {
  currentUserName: string | null;
  handleLogin: (UserLogin: UserLoginType) => Promise<UserType | null>;
  handleLogout: () => Promise<void | null>;
};

const UserContext = createContext<AuthContextType>(AuthContext);

export const useUserAuth = () => useContext(UserContext);

"use client";

import { createContext, useContext, useState } from "react";
import { AuthService } from "../services/auth-services";
import { UserLoginType, UserType } from "../types/user-types";

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUserName, setCurrentUserName] = useState<string>("Guest");

  const handleLogin = async (UserLogin: UserLoginType) => {
    try {
      const res = await AuthService.login(UserLogin);
      if (res) {
        setCurrentUserName(res.name);
        return res
      }

      return defaultData
    } catch (error) {
      console.error(error);
      return defaultData
    }
  };

  const handleLogout = async () => {
    return setCurrentUserName("Guest");
  };

  const ContextValues = {
    currentUserName,
    handleLogin,
    handleLogout,
  };

  return <UserContext value={ContextValues}>{children}</UserContext>;
};


const defaultData =  {
    id: 0,
    email: "",
    username: "guest",
    name: "Guest",
    password: "",
    status: ""
}

const AuthContext = {
  currentUserName: "Guest",
  handleLogin: async () => (defaultData),
  handleLogout: async () => {},
};

type AuthContextType = {
  currentUserName: string | null;
  handleLogin: (UserLogin: UserLoginType) => Promise<UserType>;
  handleLogout: () => Promise<void>;
};

const UserContext = createContext<AuthContextType>(AuthContext);

export const useUserAuth = () => useContext(UserContext);

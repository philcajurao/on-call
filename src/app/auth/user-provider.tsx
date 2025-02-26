"use client";

import { createContext, useContext } from "react";
import { UserType } from "./types/user-types";

const guestUser =  {
    id: 0,
    email: "guest",
    username: "guest",
    name: "Guest",
    password: "guest",
    status: "guest"
}

const UserContext = createContext<UserType>(guestUser);

export const UserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return(
    <UserContext value={guestUser}>
        {children}
    </UserContext>
  )
}

export const useUser = () => useContext(UserContext)

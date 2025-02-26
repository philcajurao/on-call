"use server"

import { UserLoginType, UserType } from "../../_lib/types/user-types";

export async function signInWithAuth(formData: FormData, handleLogin: (UserLogin: UserLoginType) => Promise<UserType>) {
    "use server";
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (!username) {
      console.log("walang username");
    }

    if (!password) {
      console.log("walang password");
    }

    try {
      const res = await handleLogin({ username, password });

     return res
    } catch (error) {
      throw error;
    }
  }
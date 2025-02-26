
"use client"

import { useRouter } from "next/navigation";
import { useUserAuth } from "../../_lib/context/user-provider";

export default function SignIn() {
  const { handleLogin } = useUserAuth();
  const router = useRouter();

  async function signInUser(formData: FormData) {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (!username) {
      console.log("walang username");
    }

    if (!password) {
      console.log("walang password");
    }

    try {
      const res = await handleLogin({username, password})
      if (res) {
        router.push(`/${res.username}`)
      }
      
    } catch (error) {
      throw error;
    }
  }

  return (
    <div className="flex justify-center items-center py-8">
      <form
        action={signInUser}
        className="flex flex-col border p-4 w-full max-w-md space-y-4"
      >
        <div className="grid">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            title="username"
            className="text-black px-2 py-1"
          />
        </div>

        <div className="grid">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            title="password"
            className="text-black px-2 py-1"
          />
        </div>

        <button type="submit" className="self-end px-4 py-2">
          Sign in
        </button>
      </form>
    </div>
  );
}

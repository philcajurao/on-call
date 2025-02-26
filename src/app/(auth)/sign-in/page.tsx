"use client";

import { useRouter } from "next/navigation";
import { useUserAuth } from "../../_lib/context/user-provider";
import { useState } from "react";

type Error = {
  username: string;
  password: string;
  wrongCredentials?: string;
};

export default function SignIn() {
  const { handleLogin } = useUserAuth();
  const router = useRouter();

  const [errors, setErrors] = useState<Error>({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  async function signInUser(formData: FormData) {
    setLoading(true);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    setErrors({ username: "", password: "" });

    if (username === "") {
      setErrors((prev) => ({
        ...prev,
        username: "Username is required.",
      }));
    }

    if (password === "") {
      setErrors((prev) => ({
        ...prev,
        password: "Password is required.",
      }));
    }

    if (username === "" || password === "") {
      return setLoading(false);
    }

    try {
      const res = await handleLogin({ username, password });
      if (res) {
        setTimeout(() => {
          router.push(`/${res.username}`);
        }, 3000);
      } else {
        setErrors((prev) => ({
          ...prev,
          wrongCredentials: "Doesn't match any credentials.",
        }));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }

  return (
    <div className="flex justify-center items-center py-8">
      <form
        action={signInUser}
        className="flex flex-col border p-4 w-full max-w-md space-y-4"
      >
        {errors.wrongCredentials && (
          <p className="text-red-600">{errors.wrongCredentials}</p>
        )}
        <div className="grid">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            title="username"
            className="text-black px-2 py-1"
          />
          {errors.username && <p className="text-red-600">{errors.username}</p>}
        </div>

        <div className="grid">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            title="password"
            className="text-black px-2 py-1"
          />
          {errors.password && <p className="text-red-600">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className={`self-end px-4 py-2 border hover:bg-white hover:text-black ${loading?"animate-pulse":""}`}
          disabled={loading}
        >
          {loading ? (
            <div className="h-6 w-6 rounded-full border-x animate-spin"></div>
          ) : (
            "Sign in"
          )}
        </button>
      </form>
    </div>
  );
}

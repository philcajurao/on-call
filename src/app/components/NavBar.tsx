"use client"

import { useUserAuth } from "../_lib/context/user-provider";

export default function NavBar() {
  const { currentUserName } = useUserAuth();
  return (
    <div className="border-b flex justify-between items-center py-4 px-8 bg-white/5">
      <h2>OnCall</h2>
      <button>{currentUserName}</button>
    </div>
  );
}

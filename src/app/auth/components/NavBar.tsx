"use client"

import { useUser } from "../user-provider";

export default function NavBar() {
  const { name } = useUser();
  return (
    <div className="border-b flex justify-between items-center py-4 px-8 bg-white/5">
      <h2>OnCall</h2>
      <button>{name}</button>
    </div>
  );
}

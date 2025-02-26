import { redirect } from "next/navigation";
import { getUsers } from "../auth/services/user-services";

export default function SignIn() {

  async function signInUser(formData: FormData) {
    "use server"
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    const findUser = (await getUsers()).find(user => user.username === username && user.password === password)
    
    if(!username) {
      console.log("walang username");
    }

    if(!password) {
      console.log("walang password");
    }

    if(findUser) {
      redirect(`/${findUser.username}`)
    }

    
  }

  return (
    <div className="flex justify-center items-center py-8">
      <form action={signInUser} className="flex flex-col border p-4 w-full max-w-md space-y-4">
        <div className="grid">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" title="username" className="text-black px-2 py-1" />
        </div>

        <div className="grid">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" title="password" className="text-black px-2 py-1" />
        </div>

        <button type="submit" className="self-end px-4 py-2">Sign in</button>
      </form>
    </div>
  );
}

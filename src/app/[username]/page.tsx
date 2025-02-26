import { getUserDetail } from "../_lib/services/user-services";
import Projects from "../projects/page";

export default async function UserPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const userDetail = await getUserDetail(username)
  return (
    <div className="px-4 py-2">
        <h1>Hello {userDetail?.name}</h1>
        <Projects />
    </div>
  )
}

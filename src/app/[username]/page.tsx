import { getUserDetail } from "../auth/services/user-services";

export default async function UserPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const userDetail = await getUserDetail(username)
  return (
    <div>
        <h1>Hello {userDetail?.name}</h1>
    </div>
  )
}

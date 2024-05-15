import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import CodePlayground from "./_components/live-codes"

export default async function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  return (
    <div className="h-full">
      <CodePlayground></CodePlayground>
    </div>
  );
}

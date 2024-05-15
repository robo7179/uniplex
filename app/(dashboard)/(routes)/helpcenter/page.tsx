import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import HelpCenter from "./_components/website-embed"

export default async function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  return (
    <div className="h-full">
      <HelpCenter/>
      {/* <ChatWidget/> */}
    </div>
  );
}

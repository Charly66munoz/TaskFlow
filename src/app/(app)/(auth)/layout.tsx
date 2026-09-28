import { getSession } from "@/server/actions/auth/getSession";
import { redirect } from "next/navigation";

async function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
  const session = await getSession();

  if (session) {
    redirect("/");
  }

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 flex flex-col h-screen  ">
          <main className="flex-1 min-h-0 overflow-hidden md:mb-0 sm:basis-3/3">
            {children}
          </main>
      </div>
    </div>
  );
}

export default AppLayout;

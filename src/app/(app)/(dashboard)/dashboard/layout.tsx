import Sidebar from "@/components/layouts/Sidebar";
import Header from "@/components/layouts/Header";
import { getSession } from "@/server/actions/auth/getSession";
import { redirect } from "next/navigation";
import { FeedbackProvider } from "@/components/providers/FeedbackProvider";


async function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
  const session = await getSession();

  if(!session) redirect("/login?reason=unauthorized");

  
  return (
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-75"
          style={{
            backgroundImage: `url('/Bg-img.png')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-slate-900/80" />
        <div className="relative z-10 flex flex-col h-screen  ">
          <div className="flex flex-row">
            <div className="basis-3/3">
              <Header />
            </div>
          </div>
          <div className="flex flex-1 min-h-0 flex-col-reverse md:flex-row">
            <aside className="hidden md:flex  shrink-0 md:items-center ">
              <Sidebar />
            </aside>
            <aside className="fixed right-5 left-5 bottom-5 md:hidden z-20">
              <Sidebar />
            </aside>
            <main className="flex-1 min-h-0 overflow-hidden md:mb-0 sm:basis-3/3 p-4 ">
              <FeedbackProvider>
                {children}
              </FeedbackProvider>
            </main>
          </div>
        </div>
      </div>
  );
}

export default AppLayout;

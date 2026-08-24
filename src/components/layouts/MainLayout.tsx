import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

//marcador de posición dentro de una ruta padre. Le indica a react-router-dom dónde debe renderizar el contenido de las rutas hijas.

function MainLayout(){
    
    return (
      <>
        <div className="relative min-h-screen">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-75"
            style={{
              backgroundImage: `url('/Bg-img.png')`,
              // Ocupa toda la altura de la pantalla
            }}
          ></div>
          {/* Overlay  aqui se puede tocar para cambiar el color a light*/}
          <div className="absolute inset-0 bg-slate-900/80" />
          {/* Application */}
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
                <Outlet />
              </main>
            </div>
          </div>
        </div>
      </>
    );
}

export default MainLayout;
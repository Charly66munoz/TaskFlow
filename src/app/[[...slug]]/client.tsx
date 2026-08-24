"use client"; //  Obligatorio para decirle a Next.js que esto corre en el navegador

import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom"; // 👈 Importas React Router
import { getAppRouter } from "../../routes/appRouter";

// 💡 Esto importa tu archivo App.tsx tradicional de Vite (ajusta los ../.. según donde esté tu App)

export function ClientOnly() {
  const [router, setRouter] = useState<ReturnType<typeof getAppRouter> | null>(
    null,
  );

  useEffect(() => {
     // Esto se ejecuta SÓLO en el navegador del usuario, donde 'document' ya existe
     setRouter(getAppRouter());
   }, []);

   // Mientras se inicializa en el cliente, mostramos una pantalla de carga vacía
   if (!router) return <div className="min-h-screen bg-slate-900"></div>;


  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

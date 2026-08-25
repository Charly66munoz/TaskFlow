import Link  from "next/link"
const Sidebar = () =>{

    return (
      <nav className=" shadow-xl/20 bg-purple-900/90 md:w-full px-2 py-4 gap-7 md:py-10 md:pr-5 flex md:flex-col items-center justify-center text-[14px] text-white flex-row rounded-3xl md:rounded-l-none ">
        <Link href={""}>Dashboard</Link>
        <Link href={""}>Crear tareas</Link>
        <Link href={""}>Perfil</Link>
      </nav>
    );
}

export default Sidebar
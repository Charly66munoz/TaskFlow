// const navigation = [
//   { name: "Product", href: "#" },
//   { name: "Features", href: "#" },
//   { name: "Marketplace", href: "#" },
//   { name: "Company", href: "#" },
// ];

const Header = ()=>{
  return (
    <header className="shadow-xl/10 h-15 flex flex-col justify-center">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="TaskFlowLogo.svg"
              className="h-10 w-auto"
            />
          </a>
        </div>

        {/* <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
                {item.name}
              </a>
            ))}
          </div> */}
        <div className=" lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-md/6 font-semibold text-purple-600 ">
            Log out
          </a>
        </div>
      </nav>
    </header>
  );
}
export default Header
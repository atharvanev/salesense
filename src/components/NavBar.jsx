import Link from "next/link"; // Import Link from next/link
import { FaDollarSign } from "react-icons/fa";
//import { NavLink } from "react-router-dom";
import { useRouter } from "next/router"; // Import useRouter

const NavBar = () => {
  const router = useRouter(); // Get the router object
  const currentPath = router.pathname; // Get the current path
  return (
    <nav className="w-full mt-5 font-Lexend px-8 mb-12 ">
      <div className="container mx-auto flex items-center justify-between flex-wrap md:flex-nowrap py-4">
        {/* Logo */}
        <div className="text-black md:order-1 flex items-center">
          <h1 className="ml-2 text-4xl font-semibold">SaleSense</h1>
        </div>
        <div className="text-black order-3 w-full md:w-auto md:order-2">
          <ul className="flex font-semibold justify-between">
            {/* Home and About Links */}
            <li
              className={`md:px-4 md:py-2 ${currentPath === "/" ? "text-purple-300 rounded-lg" : "hover:text-black"}`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`md:px-4 md:py-2 ${currentPath === "/about" ? "text-purple-300 rounded-lg" : "hover:text-black"}`}
            >
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

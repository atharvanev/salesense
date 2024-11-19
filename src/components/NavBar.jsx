import Link from "next/link"; // Ensure you have this import
import { useRouter } from "next/router"; // Ensure you have this import

const NavBar = () => {
  const router = useRouter(); // Get the router object
  const currentPath = router.pathname; // Get the current path

  return (
    <nav className="w-full mt-5 font-Lexend px-8 mb-12">
      <div className="container mx-auto flex items-center justify-between flex-wrap md:flex-nowrap py-4">
        {/* Logo */}
        <div className="flex items-center text-4xl font-semibold text-black">
          SaleSense
        </div>

        {/* Navigation Links */}
        <div className="flex-grow md:flex md:justify-end">
          <ul className="flex font-semibold justify-end space-x-4">
            <li
              className={`md:px-4 md:py-2 ${
                currentPath === "/"
                  ? "text-purple-300 rounded-lg"
                  : "hover:text-black"
              }`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`md:px-4 md:py-2 ${
                currentPath === "/about"
                  ? "text-purple-300 rounded-lg"
                  : "hover:text-black"
              }`}
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

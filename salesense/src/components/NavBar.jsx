import Link from 'next/link'; // Import Link from next/link
import { FaDollarSign } from 'react-icons/fa';
//import { NavLink } from "react-router-dom";
import { useRouter } from 'next/router'; // Import useRouter

const NavBar = () => {

    const router = useRouter(); // Get the router object
    const currentPath = router.pathname; // Get the current path
  return (
    <nav className="bg-green-400 shadow-md w-full px-8">
      <div className="container mx-auto flex items-center justify-between flex-wrap md:flex-nowrap py-4">
        {/* Logo */}
        <div className="text-white md:order-1 flex items-center">
          <FaDollarSign size={30} />
          <h1 className="ml-2 text-2xl font-bold">Sale Sense</h1>
        </div>
        <div className="text-white order-3 w-full md:w-auto md:order-2">
          <ul className="flex font-semibold justify-between">
            {/* Home and About Links */}
            <li className={`md:px-4 md:py-2 ${currentPath === '/' ? 'bg-black rounded-lg' : 'hover:text-white'}`}>
              <Link href="/">Home</Link>
            </li>
            <li className={`md:px-4 md:py-2 ${currentPath === '/about' ? 'bg-black rounded-lg' : 'hover:text-white'}`}>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

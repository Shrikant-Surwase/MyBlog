import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaSun, FaRegMoon } from "react-icons/fa";
import { useTheme } from 'next-themes'
import Link from "next/link";
import Image from "next/image";
import logo from '../public/images/bloglogo.jpg'
import Search from "@/components/Search";

function Header() {

  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full">

      <div className="container flex flex-wrap items-center justify-between mx-auto">

        <Link href="/" className="flex items-center">
          <Image className="rounded-3xl p-3 hover:w-16" width={60} height={70} src={logo} alt=" demo image " />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">YourBlog</span>
        </Link>

        <div className="flex md:order-2">

          <ul className="flex flex-wrap p-4 md:space-x-8 md:mt-0 md:text-sm md:font-medium">


            <li className="block py-2 pl-3 pr-4 text-gray-700 hover:text-blue-700 dark:hover:text-blue-700 rounded md:p-0 dark:text-white" aria-current="page">
              <Search />
            </li>

            <li>
              <Link href="https://github.com/Shrikant-Surwase" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-blue-700 dark:hover:text-blue-700 md:p-0 dark:text-white" aria-current="page">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/Shrikant-Surwase" className="block py-2 pl-3 pr-4 text-gray-700 rounded  hover:text-green-700 dark:hover:text-green-700 md:p-0 dark:text-white"> <FaGithub />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/shrikant-surwase-139aa2224/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-blue-700 dark:hover:text-blue-700 md:p-0 dark:text-white">
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/shrikant-surwase-139aa2224/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-red-700 dark:hover:text-red-500 md:p-0 dark:text-white">
                <FaInstagram />
              </Link>
            </li>
            <li >
              <button className="block py-2 pl-3 pr-4 rounded md:p-0" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? <FaSun /> : <FaRegMoon />}
              </button>
            </li>
          </ul>
        </div>

      </div>

    </header>
  )

}
export default Header

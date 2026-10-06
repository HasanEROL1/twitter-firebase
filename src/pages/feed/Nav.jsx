import { navSections } from "../../utils/constants"
import { getUserName } from "../../utils/helpers"
import { FaDoorOpen as Door } from "react-icons/fa";
import { auth } from './../../firebase/index';
import { signOut } from "firebase/auth";
import { Link, useLocation } from "react-router-dom";

const Nav = ({ user }) => {
  const location = useLocation()

  return (
    <nav className=" flex flex-col justify-between items-end px-2 py-4">
      {/* links */}
      <div>
        <img src="/logo.webp" alt="X" className="w-14 mb-4" />

        {navSections.map((item, key) => {
          const isActive = location.pathname === item.path ||
            (item.path !== "/" && location.pathname.startsWith(`${item.path}/`))

          return (
            <Link
              to={item.path}
              key={key}
              className={`flex items-center gap-3 text-2xl md:text-xl p-3 cursor-pointer rounded-lg transition max-md:justify-center ${isActive
                  ? 'bg-[var(--color-tw-gray)] text-white font-bold'
                  : 'text-zinc-200 hover:bg-[var(--color-tw-gray)]'
                }`}
            >
              {item.icon}

              <span className="whitespace-nowrap max-md:hidden">{item.title}</span>
            </Link>
          )
        })}
      </div>

      {/* user */}

      <div>
        <div className="flex max-md:flex-col gap-4 justify-between max-md:items-center">
          <div className="flex gap-2">
            <img className="rounded-full max-w-[45px]  "
              src={user?.photoURL} alt={user?.displayName} />

            <div className="mx-1">
              <p className="max-md:hidden">{user.displayName}</p>
              <p className="max-md:hidden text-sm text-zinc-400">{getUserName(user.displayName)}</p>
            </div>
          </div>
          <button
            onClick={() => signOut(auth)}
            className="mx-1 cursor-pointer"
          > 
          <Door className="text-red-500 hover:text-white text-xl" title="Çıkış Yap"/>
         
          </button>
        </div>
      </div>

    </nav>
  )
}

export default Nav
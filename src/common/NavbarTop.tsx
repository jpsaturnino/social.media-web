import { RiSearchLine } from 'react-icons/ri'
import Logo from '../public/logo.svg'

function NavbarTop() {
  return (
    <div className="flex border-gray bg-gray/20 border-b-2 w-full justify-between h-16 items-center px-3">
      <img src={Logo} alt="fipp media logo" className="h-[32px]" />
      <div className="flex items-center">
        <RiSearchLine className="ml-2 text-lightGray absolute" />
        <input className="border-gray bg-gray/20 border-2 rounded-md p-1 pl-7 focus:outline-none" />
      </div>
    </div>
  )
}

export default NavbarTop

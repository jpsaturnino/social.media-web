import NavbarSide from './NavbarSide'
import NavbarTop from './NavbarTop'
import SidebarProfile from './SidebarProfile'

interface LayoutProps {
  children: React.ReactNode
}

function Layout(props: LayoutProps) {
  const { children } = props

  return (
    <div className="flex w-full max-h-screen">
      <NavbarSide />
      <div className="flex-1 flex-col">
        <NavbarTop />
        <div className="p-5 h-[90%] overflow-y-auto scrollbar-hide">
          {children}
        </div>
      </div>
      <SidebarProfile />
    </div>
  )
}

export default Layout

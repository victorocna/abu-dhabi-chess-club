import { Menu, MenuButton } from 'echess/components';
import { Share, Feedback } from 'echess/components/Buttons';
import Header from './Header';

const Layout = ({ children, role = 'admin' }) => {
  return (
    <>
      <header className="p-4 lg:px-8 bg-white text-bluemarin flex items-center shadow">
        <div className="max flex flex-wrap items-center">
          <Header />
          <Share />
          <Feedback />
          <MenuButton />
        </div>
      </header>
      <input type="checkbox" id="menu" className="hidden" aria-label="Menu open/close" />
      <div className="p-4 lg:p-8">
        <div className="max lg:grid grid-cols-4 gap-8">
          <nav className="nav-menu">
            <Menu role={role} />
          </nav>
          <main className="col-span-3" role="main">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;

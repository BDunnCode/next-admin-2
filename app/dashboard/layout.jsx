import Header from "../ui/dashboard/header/header";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

const Layout = ({children}) => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
import Header from "../ui/dashboard/header/header";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import styles from "../ui/dashboard/dashboard.module.css";

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
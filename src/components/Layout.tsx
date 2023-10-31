import Content from "./Content";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Header />
      <Content />
      <SideBar />
    </div>
  );
};

export default Layout;

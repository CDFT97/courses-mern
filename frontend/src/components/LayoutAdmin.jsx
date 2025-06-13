import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import AdminSidebar from "./AdminSidebar"; 
import AdminNavbar from "./AdminNavbar";

const LayoutAdmin = () => {
  const { Header, Footer, Content, Sider } = Layout;

  return (

    <Layout style={{ minHeight: '100vh' }}>
 
      <Sider collapsible>
        <AdminSidebar />
      </Sider>

      <Layout className=""> 
        <Header className="w-auto">
            <AdminNavbar />
        </Header>

        
        <Content style={{ margin: '0 32px' }}>
          <div
            className=""
            style={{
              padding: 24,
              minHeight: 360,
              background: '#fff'
            }}
          >
            <Outlet />
          </div>
        </Content>

        {/* Footer del área principal */}
        <Footer style={{ textAlign: 'center' }}>
          Footer ©{new Date().getFullYear()} Creado con Ant Design y Tailwind/Flowbite
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;
import { Outlet } from "react-router-dom";
import { Layout } from "antd"

const LayoutAdmin = () => {

  const { Header, Footer, Content } = Layout;


  return (
    <Layout>
      <h2>Sidebar Admin</h2>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h1>Header</h1>
            <div>
              <a href="#">Link</a>
              <a href="#">Link</a>
              {/* <a href="#">Link</a> */}
            </div>
          </div>
        </Header>

        <Content style={{ padding: "0 50px" }}>
          <Outlet />
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Footer
        </Footer>

      </Layout>



    </Layout>
  );
};

export default LayoutAdmin;
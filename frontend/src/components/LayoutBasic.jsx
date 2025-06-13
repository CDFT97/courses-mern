import { Outlet } from "react-router-dom";
import { Layout } from "antd"

const LayoutBasic = () => {

  const { Footer, Content } = Layout;

  return (
    <Layout>
      <h2>Menu...</h2>
      <Layout>
        <Content>
          <Outlet />
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Footer
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutBasic;
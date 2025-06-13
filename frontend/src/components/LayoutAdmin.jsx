import { Outlet } from "react-router-dom";
import { Layout } from "antd"

const LayoutAdmin = () => {
  return (
    <Layout>
      <h1 style={{ color: "red" }}>Admin Layout</h1>
      <Outlet />


    </Layout>
  );
};

export default LayoutAdmin;
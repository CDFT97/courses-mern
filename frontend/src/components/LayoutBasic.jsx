import { Outlet } from "react-router-dom";
import { Layout } from "antd"


const LayoutBasic = () => {
  return (
    <Layout>
       <h1>Basic</h1>
      <Outlet />

    </Layout>
  );
};

export default LayoutBasic;
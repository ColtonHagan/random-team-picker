import { Outlet } from "react-router-dom";
import "./index.scss";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className="App">
            <div className="page">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
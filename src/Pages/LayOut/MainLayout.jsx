import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="bg-blue-50">
            <Navbar></Navbar>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;
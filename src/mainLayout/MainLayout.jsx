import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/navbar/Navbar";
import Footer from "../components/footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className="min-h-screen">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;
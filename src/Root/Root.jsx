import { Outlet } from "react-router-dom";
import Navbar from "../Component/Shared/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ToastContainer />

        </div>
    );
};

export default Root;
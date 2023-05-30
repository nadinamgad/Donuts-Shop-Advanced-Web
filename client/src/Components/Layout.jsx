import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";

export default function Layout() {
    return (
        <div>
            <NavBar />
            <Outlet/>
        </div>
    )
}
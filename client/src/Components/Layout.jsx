import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout({mode, toggleMode}) {
    return (
        <div className={mode === "dark" ? "dark-mode" : "light-mode"}>
            <NavBar toggleMode={toggleMode}/>
            <Outlet/>
        </div>
    )
}
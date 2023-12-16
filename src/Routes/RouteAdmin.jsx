import { Route, Routes } from "react-router";
import HomeAdmin from "../Components/Admin/HomeAdmin";

function RouteAdmin() {
    return (
        <>
            <Routes>
                <Route element={<HomeAdmin />} path="/homeadmin"></Route>
            </Routes>
        </>
    )
}

export default RouteAdmin
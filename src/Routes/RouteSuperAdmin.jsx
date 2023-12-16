import { Route, Routes } from "react-router";
import HomeSadmin from "../Components/SuperAdmin/HomeSadmin";

function RouteSadmin() {
    return (
        <>
            <Routes>
                <Route element={<HomeSadmin />} path="/homesadmin"></Route>
            </Routes>
        </>
    )
}

export default RouteSadmin
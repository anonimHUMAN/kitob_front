import { Route, Routes } from "react-router";
import SignUp from "../Components/Auth/SignUp";
import SignIn from "../Components/Auth/SignIn";

function RouteAuth() {
    return (
        <>
            <Routes>
                <Route element={<SignUp />} path="/signup"></Route>
                <Route element={<SignIn />} path="/signin"></Route>
            </Routes>
        </>
    )
}

export default RouteAuth
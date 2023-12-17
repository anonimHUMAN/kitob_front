import { Route, Routes } from "react-router";
import BoshSahifa from "../Components/Client/BoshSahifa"
import Muallif from "../Components/Client/Muallif";
import Muallif2 from "../Components/Client/Muallif2";
import BookView from "../Components/Client/BookView";
import Home from "../Components/Client/Home";
import AllBooks from "../Components/Client/AllBooks";

function RouteClient() {
    return (
        <>
            <Routes>
                <Route element={<BoshSahifa />} path="/"></Route>
                <Route element={<Muallif />} path="/muallif"></Route>
                <Route element={<Muallif2 />} path="/muallif2"></Route>
                <Route element={<BookView />} path="/bookview"></Route>
                <Route element={<Home />} path="/home"></Route>
                <Route element={<AllBooks />} path="/allbooks"></Route>
            </Routes>
        </>
    )
}

export default RouteClient
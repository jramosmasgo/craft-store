import { Route, Routes } from "react-router-dom";
import UserTemplate from "../../templates/UserTemplate";
import Home from "../../pages/Home";

const MainRoutes: React.FunctionComponent = () => {
    return (
        <Routes>
            <Route path='/' element={<UserTemplate />}>
                <Route path="home" element={<Home />}></Route>
            </Route>
        </Routes>
    );
};

export default MainRoutes;


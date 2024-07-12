import { Navigate, Route, Routes } from "react-router-dom";
import UserTemplate from "../../templates/UserTemplate";
import Home from "../../pages/Home";
import Products from "../../pages/Products";
import Places from "../../pages/Places";
import History from "../../pages/History";
import { Cart } from "../../pages/Cart";

const MainRoutes: React.FunctionComponent = () => {
    return (
        <Routes>
            <Route path='/' element={<UserTemplate />}>
                <Route index element={<Navigate to="home" replace />} />
                <Route path="home" element={<Home />}></Route>
                <Route path="products" element={<Products />}></Route>
                <Route path="places" element={<Places />}></Route>
                <Route path="history" element={<History />}></Route>
                <Route path="cart" element={<Cart />}></Route>
            </Route>
        </Routes>
    );
};

export default MainRoutes;


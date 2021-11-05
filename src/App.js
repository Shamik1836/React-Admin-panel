import SideBar from "./components/SideBar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import User from "./pages/User";
import NewUserPage from "./pages/NewUserPage";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NewProductPage from "./pages/NewProductPage";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/users" element={<UserList />}></Route>
          <Route path="/user/:userId" element={<User />}></Route>
          <Route path="/newuser" element={<NewUserPage />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/product/:productId" element={<Product />}></Route>
          <Route path="/newproduct" element={<NewProductPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

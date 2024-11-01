import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import PurchaseHistory from "./PurchaseHistory";
import Cart from "./Cart";
import ContactUs from "./ContactUs"; // Corrected spelling
import AboutUs from "./AboutUs";
import NonVeg from "./NonVeg";
import Veg from "./Veg";
import "./App.css";
import { useSelector } from "react-redux";
import GoogleLoginComponent from "./GoogleLoginComponent";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const cart = useSelector((state) => state.cart.items || []);  // Ensure cart is an array
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <GoogleOAuthProvider clientId="638564794107-h018r00aapvu24o7suuit6q1o0ufd4nv.apps.googleusercontent.com">
      <BrowserRouter>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/veg">Veg</Link>
          <Link to="/nonveg">NonVeg</Link>
          <Link to="/cart">Cart ({totalItems})</Link>
          <Link to="/purchasehistory">PurchaseHistory</Link>
          <Link to="/contactus">ContactUs</Link>
          <Link to="/aboutus">AboutUs</Link>
        </nav>
        <GoogleLoginComponent/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchasehistory" element={<PurchaseHistory />} />
          <Route path="/contactus" element={<ContactUs />} />  {/* Corrected spelling */}
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
      </GoogleOAuthProvider>
  );
}

export default App;

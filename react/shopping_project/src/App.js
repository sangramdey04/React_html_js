import "./App.css";
import Header from "./Container/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from "./Container/ProductListing";
import ProductDetails from "./Container/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProductListing />} />
          <Route
            exact
            path="/product/:productId"
            element={<ProductDetails />}
          />
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// import Button from "./components/reusable/buttons/Button";
// import Cards from "./components/reusable/cards/Cards";
import About from "./pages/about/about";
import Header from "./static/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/products/Products";
import Company from "./pages/company/Company";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/product" element={<Products />} />
          <Route path="/company" element={<Company />} />
        </Routes>
      </BrowserRouter>

      {/* <Cards /> */}

      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ margin: "30px" }}>
      <Button btnColor="green" name="Buy Now" />
      <Button color="red" name="Add to cart" />
      <Button name="Check it out" />
      <Button name="Budget" />
      <Button name="Buy Now" />
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
    </div>
  );
};

export default App;

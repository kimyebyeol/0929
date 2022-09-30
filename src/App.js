import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import ProductPage from "./components/ProductPage";
import UploadPage from "./components/UploadPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="./upload" element={ <UploadPage/>} />
        <Route path="/product/:id" element={<ProductPage />}></Route>
      </Routes>
     
    </>
  );
};
export default App;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Posts from "../Pages/Posts/Posts";
import Header from "../Pages/Header/Header";
import Footer from "../Footer/Footer";
import NotFound from "../Pages/NotFound/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter basename="emperial-co.com">
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/posts" element={<Posts/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;

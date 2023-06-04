import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Space, Typography } from "antd";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Cryptocurrencies from "./components/Cryptocurrencies";
import Exchange from "./components/Exchange";
import CryptoDetails from "./components/CryptoDetails";
import News from "./components/News";
import 'antd/dist/reset.css';


function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />

              <Route path="/exchange" element={<Exchange />} />

              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />

              <Route path="/crypto/:coinId" element={<CryptoDetails />} />

              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>



        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Copyright © 2021
            <Link to="/">Cryptoverse Inc.</Link> <br />
            All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;

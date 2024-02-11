import React from "react";
import "./main.css";
import { ConfigProvider } from "antd";
import Navbar from "./container/Navbar";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FarAway from "./container/FarAway.jsx";
function App() {

    return (
       <>
            <ReduxProvider store={store}>
                <ConfigProvider>
                    <Router>
                        <Navbar />
                            <Routes>
                                <Route path="/FarAway" exact element={<FarAway />} />
                            </Routes>
                    </Router>
                </ConfigProvider>
            </ReduxProvider>
            </>
    );
}

export default App;

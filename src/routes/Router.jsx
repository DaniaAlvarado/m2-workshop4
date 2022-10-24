import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Crew from "../components/crew/Crew.jsx";
import Destination from "../components/destination/Destination.jsx";
import Home from "../components/home/Home.jsx";
import Technology from "../components/technology/Technology.jsx";
import '../styles/universal.scss'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Home />} />
                <Route path="destination" element={<Destination />} />
                <Route path="crew" element={< Crew />} />
                <Route path="technology" element={< Technology />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
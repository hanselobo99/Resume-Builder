import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Main from "./Components/Main";
import {Route, Routes} from "react-router-dom";
import Resume from "./Components/Resume/Resume";
import Footer from "./Components/Footer";

function App() {
    return (
        <>
            <div className="md:container md:mx-auto ">

                <Routes>
                    <Route path={"/"} element={<Main/>}/>
                    <Route path={"resume"} element={<Resume/>}/>
                </Routes>

            </div>

        </>
    );
}

export default App;

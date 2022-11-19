import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
    return (
        <div className="md:container md:mx-auto ">
            <Header/>
            <Main/>
        </div>
    );
}

export default App;

import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Register} from "./pages/auth/Register";
import {Login} from "./pages/auth/Login";
import {Header} from "./components/nav/Header";
import {MDBBtn} from 'mdb-react-ui-kit';
import React from "react";


const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            {/*<MDBBtn>Button dd</MDBBtn>*/}

            <Routes>
                {/*<Route path="/" element={<Home/>}/>*/}
            {/*    <Route path="/register" element={<Register/>}/>*/}
            {/*    <Route path="/login" element={<Login/>}/>*/}
            </Routes>
        </BrowserRouter>
    );
}


export default App;

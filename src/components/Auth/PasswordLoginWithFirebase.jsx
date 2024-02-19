// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import RegisterAndLogin from "./RegisterAndLogin";
// import ForgotPassword from "./ForgotPassword";
// import Home from "../Home";
// import Hero from "./Hero";

// function PasswordLoginWithFirebase(){
//     return(
//         <BrowserRouter>
//             <div>
//                 <Routes>
//                 {/* <Route path="/" element={<Home/>} /> */}
//                     <Route path="/" element={<RegisterAndLogin/>} />
//                     <Route path="/Hero" element={<Hero />} />
//                     <Route path="/reset" element={<ForgotPassword/>} />
//                 </Routes>
//             </div>
//         </BrowserRouter>
//     )
// }
// export default PasswordLoginWithFirebase;

import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterAndLogin from "../RegisterAndLogin";
import ForgotPassword from "./ForgotPassword";
import Home from "../Home";
import Hero from "./Hero";

function PasswordLoginWithFirebase(){
    // Assume isAuthenthicated is a stae that determines if the user is logged in 
    const [isAuthenthicated, setisAuthenthicated] = useState(false);

    return(
        <BrowserRouter>
            <div>
                <Routes>
                    <Route 
                        path="/"
                        element={
                            isAuthenthicated ? (
                                <Navigate to="/Hero" />
                            ) : (
                                <RegisterAndLogin setisAuthenthicated={setisAuthenthicated} />
                            )
                        }
                    />
                    <Route path="/Hero" element={<Hero />} />
                    <Route path="/reset" element={<ForgotPassword />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default PasswordLoginWithFirebase;

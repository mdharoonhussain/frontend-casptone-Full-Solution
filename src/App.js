import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Login from './Components/Login/Login';
import Signup from './Components/Sign_Up/Sign_Up'
import InstantConsultation from './Components/Instant_Consultation/InstantConsultation'
//import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
//import BookingConsultation from './Components/BookingConsultation';
//import Notification from './Components/Notification/Notification';
//import ReviewForm from './Components/ReviewForm/ReviewForm'
//import ProfileCard from './Components/ProfileCard/ProfileCard';


function App() {

    return (
        <div className="App">
            <BrowserRouter>
             
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Landing_Page/>}/>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/instant-consultation" element={<InstantConsultation />} />


                    </Routes>
              
            </BrowserRouter>

        </div>
    );
}
export default App;
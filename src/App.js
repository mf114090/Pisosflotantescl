import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar from './componets/Navbar'
const App=()=>{
    return(
        <BrowserRouter>
            <Navbar/>
          
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/About" element={<About />}/> 
                    <Route exact path="/Services" element={<Services />}/>
                    <Route exact path="/Contact" element={<Contact />}/>
                        
                        
                </Routes>
            
        </BrowserRouter>
    )
    
}
export default App;
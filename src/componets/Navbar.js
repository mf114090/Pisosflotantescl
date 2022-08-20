import React from "react";
import {Link} from 'react-router-dom';









  const Navbar= () => {
    return (
        <nav className="navbar  bg-dark">
            <div className="container">
                <div className='navbar-brand  text-uppercase-yellow col-md-3'>
					<Link to="/">
						<span className="btn btn-dark mb-0 fs-5 p-2">Inicio</span>
					</Link> 
				</div>
                <div className="col-md-3 "> 
											
									
										
					<Link to="/about">
						<span className=" btn btn-dark mb-0 fs-5 p-2">Nosotros</span>
					</Link> 
					
					<Link to="/Services">				
						<span className=" btn btn-dark mb-0 fs-5 p-2">Servicios</span>
					</Link>  
					
					<Link to= "/Contact">				
						<span className=" btn btn-dark  mb-0 fs-5 ">Contacto</span>
					</Link>
					
				
					
                
				</div>
                
            </div>
        </nav>
    )
}

export default Navbar;



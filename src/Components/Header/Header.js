import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import headerImage from './header.jpg';

const Header = () => {
    const imgSyle = {
        maxHeight: "100px",
        borderBottom: "1px solid #ddd",
        marginTop:"20px",
        marginBottom:"20px",
      };
    
    return (
        <div className="container-fluid text-center">
            <img src={headerImage} alt="Header pic" className="img-fluid" style={imgSyle}/>
            <h2 className="pb-3 mb-3" style={{borderBottom:"2px solid #333"}}>Select player from the list</h2>
        </div>
    );
};

export default Header;
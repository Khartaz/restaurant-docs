import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {
    return ( 
            <div className="content">
                <div className="post">
                <h2>Start page</h2>
                <p className="a">Heroku Swagger-UI </p>
                    <div className="details">
                    <p className="text-line"><a href="https://shielded-brook-69228.herokuapp.com/swagger-ui.html" target="_blank">Heroku Link</a> </p>
                    </div>
                </div>
            </div>
     );
}
 
export default HomePage;
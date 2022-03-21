import React from 'react';
import imageTV from '../images/TV.jpeg';
import imageMobile from '../images/mobile.jpg';
import imageLaptop from '../images/laptops.jpg';
import imageSmartWatch from '../images/smartWatches.jpg';

import { Link } from 'react-router-dom';
const MainCategory = () => {
    return(
        <div class="container">
        <br/>
            <div class="row"> 
                <div class="col">
                    <Link to="/categorytv">
                        <img src={imageTV} className="githubIcon" alt="Write something here"/>
                    </Link>
                    <div><h4> Televisions  </h4> </div>
                </div>
                <div class="col">
                   
                    <Link to="/categorymobile">
                        <img src={imageMobile} className="githubIcon" alt="Write something here"/>
                    </Link>
                    <div> <h4> Mobiles </h4></div>
                </div>
                <div class="col">
                    
                    <Link to="/categorylaptop">
                        <img src={imageLaptop} className="githubIcon" alt="Write something here"/>
                    </Link>
                    <div> <h4>Laptops </h4> </div>
                </div>
                <div class="col">
                     <Link to="/categorywatches">
                        <img src={imageSmartWatch} className="githubIcon" alt="Write something here"/>
                    </Link>
                     <div> <h4> Watches </h4> </div>
                </div>
            </div>
                       
        </div>
    )
}

export default MainCategory;

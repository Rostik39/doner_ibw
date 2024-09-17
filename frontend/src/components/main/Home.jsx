import React, { useEffect } from "react";
import typing_animation from "../../functions/typingAnimation.js";

const Home = () => {

    useEffect(()=> {
        typing_animation();
    }, [])

    return ( 
        <div className="container__welcome">
            <div className="text_hide"></div>
            <div className="text">Welcome!</div>
            <div className="text_cursor"></div>
        </div>
     );
}
 
export default Home;
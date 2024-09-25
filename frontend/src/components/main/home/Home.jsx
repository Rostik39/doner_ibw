import React from "react";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return ( 
        <div className="page__home home">
            <div className="home__container">
                <TypeAnimation
                sequence={[
                    'Welcome!',
                    3000,
                    "",
                    1500,
                    () => {
                    },
                ]}
                wrapper="span"
                speed={250}
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '4rem', display: 'inline-block' }}
                />
            </div>
        </div>
     );
}
 
export default Home;
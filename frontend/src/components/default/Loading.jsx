import React from 'react';

const Loading = () => {
    return ( 
        <div className="menu--page__load load">
            <div className="load__text">Loading...</div>
            <div className="load__dots-container">
                <div className="load__dot"></div>
                <div className="load__dot"></div>
                <div className="load__dot"></div>
                <div className="load__dot"></div>
                <div className="load__dot"></div>
            </div>
        </div>
     );
}
 
export default Loading;
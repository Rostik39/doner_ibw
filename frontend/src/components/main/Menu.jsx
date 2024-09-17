
import useFetch from "../../functions/useFetch";
import MenuList from "./MenuList";
import Sidebar from "./Sidebar";
import React, { useState, useEffect } from "react";

const Menu = (props) => {
    const url = "http://127.0.0.1:5000/menu/";

    const [categories, setCategories] = useState();
    const [dishes, setDishes] = useState();
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(null);
    const [activeCategory, setActiveCategory] = useState('');

    const { data: categoryData, error: categoryError } = useFetch(url + 'categories', props.token, props.setToken);

    useEffect(() => {
        if (categoryData) {
            if(!activeCategory){
                setCategories(categoryData);
                const firstCategory = categoryData[0]?.name;
                setActiveCategory(firstCategory);
            }
            if (activeCategory) {
                const dishesUrl = `http://127.0.0.1:5000/menu/${activeCategory}`;

                fetch(dishesUrl,{
                    headers: {
                        Authorization: 'Bearer ' + props.token
                    }
                })
                    .then(res => {
                        if (!res.ok) {
                            if (res.status === 401){
                                alert("Session has expired");
                                const buttonLogout = document.getElementById("logout");
                                buttonLogout.click();
                            }
                            throw Error('could not fetch the data for that resource');
                        }
                        return res.json();
                    })
                    .then((data) => {
                        setDishes(data);
                        setLoading(false);
                    })
                    .catch(err => {
                        setLoading(false);
                        setCategories();
                        setDishes();
                        setError(err.message);
                    });
            }
        } else if (categoryError) {
            setLoading(false);
            setCategories();
            setDishes();
            setError(categoryError);
        }
    }, [categoryData, categoryError, activeCategory]);

    const clean = (category) => {
        setDishes('');
        setActiveCategory(category);
    }

        
    return ( 
        <section className={`page__menu menu--page ${(isLoading || hasError) ? 'centered' : ''}`}>
            {isLoading && 
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
            }
            {hasError &&
                <div>{hasError}</div>
            }
            {categories && <Sidebar categories={categories} triggerSetActiveCategory={clean}></Sidebar>}
            {dishes &&
                <>
                    <div className="menu--page__content">
                        <div className="menu--page__box">
                            <MenuList dishes={dishes} activeCategory={activeCategory}></MenuList>
                        </div>
                    </div>
                </>
            }
        </section>
    );
}
 
export default Menu;
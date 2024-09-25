
import useFetch from "../../../functions/useFetch";
import Loading from "../../default/Loading";
import MenuList from "./MenuList";
import Sidebar from "./Sidebar";
import React, { useState, useEffect} from "react";

const Menu = (props) => {
    const [categories, setCategories] = useState();
    const [dishes, setDishes] = useState();
    const [activeCategory, setActiveCategory] = useState('');

    const { data, error, isPending, fetchData } = useFetch(props.token, props.setToken);

    useEffect(()=>{
        fetchData("/menu/categories", "GET", 
            {
                doOnSuccess: (data)=>{
                    setCategories(data);
                    const firstCategory = data[0]?.name;
                    setActiveCategory(firstCategory);
                },
                doOnError: ()=>{
                    setCategories('');
                    setDishes('');
                }
            }
        )},[])
    
    useEffect(() => {
        categories && activeCategory &&
            fetchData(`/menu/${activeCategory}`, 
                "GET",
                {
                    doOnSuccess: (data)=>{
                        setDishes(data)
                    },
                    doOnError: ()=>{
                        setCategories('');
                        setDishes('');
                    }
                }
            )}
    , [categories, activeCategory]);

    const clean = (category) => {
        setDishes('');
        setActiveCategory(category);
    }

    return ( 
        <section className={`page__menu menu--page ${(isPending || error) ? 'centered' : ''}`}>
            {isPending && 
                <Loading />
            }
            {error &&
                <div>{error}</div>
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